export default function NotFound() {
  return (
    <div className="not-found min-h-screen grid place-items-center">
      <div className="flex p-5 flex-col items-center text-center gap-5">
        <h1 className="text-5xl font-bold drop-shadow-sm">404</h1>
        <h2 className="text-3xl font-semibold">Page not found.</h2>
        <p>The requested file could not be found at this address.</p>
        <p>For any further complaints, contact the developer.</p>
      </div>
    </div>
  );
}
