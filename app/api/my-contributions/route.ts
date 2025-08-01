import { IMPORTANT_REPOS } from '@/data/ImportantRepos';
import { GitHubSearchIssuesResponse } from '@/types/github';
import type { MyContribution, MyContributionResponse } from '@/types/contributions';

export async function GET(): Promise<Response> {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    return new Response('Credenciales de GitHub no configuradas', { status: 500 });
  }

  if (!IMPORTANT_REPOS.length) {
    return Response.json([]);
  }

  try {
    // Construir query para buscar PRs mergeados en múltiples repos
    const repoQuery = IMPORTANT_REPOS.map((repo) => `repo:${repo}`).join(' ');
    const searchQuery = `author:${GITHUB_USERNAME} is:pull-request is:merged ${repoQuery}`;

    const response = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(searchQuery)}&sort=updated&order=desc&per_page=50`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

    if (!response.ok) {
      console.warn(`Error en búsqueda de PRs: ${response.status}`);
      return Response.json([]);
    }

    const data: GitHubSearchIssuesResponse = await response.json();

    if (!data.items?.length) {
      return Response.json([]);
    }

    // Obtener información detallada de cada repositorio
    const contributions: MyContribution[] = await Promise.all(
      data.items.map(async (pr) => {
        // Extraer owner y repo name de la repository_url
        const repoUrlParts = pr.repository_url.split('/');
        const repoName = repoUrlParts[repoUrlParts.length - 1];
        const ownerName = repoUrlParts[repoUrlParts.length - 2];

        // Obtener información del repositorio
        const repoResponse = await fetch(`https://api.github.com/repos/${ownerName}/${repoName}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        let repoData = null;
        if (repoResponse.ok) {
          repoData = await repoResponse.json();
        }

        return {
          id: pr.id.toString(),
          repository: {
            name: repoData?.name || repoName,
            fullName: repoData?.full_name || `${ownerName}/${repoName}`,
            url: repoData?.html_url || `https://github.com/${ownerName}/${repoName}`,
            owner: {
              login: repoData?.owner?.login || ownerName,
              avatarUrl: repoData?.owner?.avatar_url || pr.user.avatar_url,
              profileUrl: repoData?.owner?.html_url || `https://github.com/${ownerName}`,
            },
          },
          lastContribution: pr.merged_at || pr.updated_at,
          description: pr.title,
          contributor: pr.user.login,
          htmlUrl: pr.html_url,
        };
      })
    );

    const responseData: MyContributionResponse = {
      total: contributions.length,
      uniqueRepository: new Set(contributions.map((c) => c.repository.fullName)).size,
      contributions,
    };

    return Response.json(responseData);
  } catch (error) {
    console.error('Error al obtener contribuciones:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
}
