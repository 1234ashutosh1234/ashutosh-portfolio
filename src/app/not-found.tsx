export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0F172A] text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-cyan-400">404</h1>

        <p className="mt-4 text-2xl">
          Page Not Found
        </p>

        <a
          href="/"
          className="mt-10 inline-block rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4"
        >
          Back Home
        </a>
      </div>
    </div>
  );
}