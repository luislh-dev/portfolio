import { Github, LinkedIn, XformerlyTwitter } from '@components/Icons';
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from '@config/SocialLinks';

function FooterDescription() {
  return (
    <div className="max-w-[348px]">
      <div className="mb-3 text-[13px] text-slate-600 dark:text-slate-400">Sobre mi</div>
      <p className="mb-4 font-normal leading-relaxed">
        Soy Luis Lopez, un <strong>desarrollador Full-Stack</strong> apasionado por crear soluciones
        eficientes e innovadoras
      </p>
      <ul className="-ml-2 flex gap-1">
        <li>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center"
            aria-label="Mi perfil de LinkedIn"
            title="Mi perfil de LinkedIn"
          >
            <LinkedIn fill="currentcolor" className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopeneer noreferrer"
            className="flex h-9 w-9 items-center justify-center"
            aria-label="Mi perfil de GitHub"
            title="Mi perfil de GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href={TWITTER_LINK}
            target="_blank"
            rel="noopeneer noreferrer"
            className="flex h-9 w-9 items-center justify-center"
            aria-label="Mi perfil de Twitter"
            title="Mi perfil de Twitter"
          >
            <XformerlyTwitter className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterDescription;
