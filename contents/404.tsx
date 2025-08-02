import Link from 'next/link';

function Error404Contents() {
  return (
    <div className="background-grid flex h-screen w-full items-center justify-center">
      <div className="text-center text-slate-600 dark:text-slate-400">
        <h1 className="py-12 text-center">
          <div className="mb-3 text-8xl font-extrabold">404</div>
          <div className="text-2xl"> Página no Encontrada </div>
        </h1>
        <Link href="/" className="rounded-xl px-4 py-2 text-xl text-blue-600 dark:text-blue-500">
          volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Error404Contents;
