export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 p-6 rounded-3xl">
      <h1 className="text-2xl font-bold text-white">
        Dashboard
      </h1>

      <nav className="mt-10 flex flex-col gap-4">
        <button className="text-left text-zinc-300 hover:text-white">
          Home
        </button>

        <button className="text-left text-zinc-300 hover:text-white">
          Courses
        </button>

        <button className="text-left text-zinc-300 hover:text-white">
          Analytics
        </button>
      </nav>
    </aside>
  );
}