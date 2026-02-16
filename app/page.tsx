export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Qayam</h1>
        <p className="text-slate-400">
          Hotel Booking & Property Management System
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://pms.qayam.com.pk"
            className="px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-500"
          >
            Login to PMS
          </a>
        </div>
      </div>
    </main>
  );
}
