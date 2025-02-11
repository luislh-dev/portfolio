export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const owner = searchParams.get('owner');
  const repo = searchParams.get('repo');
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!owner || !repo) {
    return new Response('Faltan parámetros owner y repo', { status: 400 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (!response.ok) {
      return new Response(`Error al obtener contribuidores (${response.status})`, {
        status: response.status,
      });
    }

    const contributors = await response.json();
    return Response.json(contributors);
  } catch {
    return new Response('Error interno del servidor', { status: 500 });
  }
}
