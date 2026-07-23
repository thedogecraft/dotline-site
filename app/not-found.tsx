import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold">404</h1>
      <p className="mb-8 text-lg text-muted-foreground">Page not found</p>
      <div className="flex gap-3">
        <Link
          href="https://parcoil.com"
          className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Back to Parcoil
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Back to Dotline
        </Link>
      </div>
    </div>
  );
}
