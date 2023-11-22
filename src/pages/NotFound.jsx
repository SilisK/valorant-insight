export default function NotFound() {
  return (
    <div className="not-found min-h-screen grid place-items-center">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-5xl font-semibold drop-shadow-sm">Error 404</h1>
        <p>Page not found.</p>
      </div>
    </div>
  );
}
