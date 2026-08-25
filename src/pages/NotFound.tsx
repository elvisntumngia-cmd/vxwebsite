import { Link } from "react-router";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
          The page you requested does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
