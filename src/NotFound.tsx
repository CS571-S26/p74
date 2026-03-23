import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-8xl font-bold text-brand">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Page not found
      </p>
      <p className="mt-2 text-gray-500">
        Sorry we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-medium text-white transition hover:bg-brand-hover"
      >
        Go back home
      </Link>
    </div>
  );
}
