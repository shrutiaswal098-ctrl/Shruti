export default function HeroTile() {
  return (
    <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 rounded-3xl text-white">
      
      <p className="uppercase tracking-[5px] text-sm text-gray-200">
        Welcome Back
      </p>

      <h1 className="text-5xl font-bold mt-4">
        Welcome back, Shruti 👋
      </h1>

      <p className="mt-4 text-zinc-100">
        Keep learning and maintain your streak.
      </p>

      <div className="flex gap-4 mt-6">
        <div className="border border-white/20 rounded-xl px-4 py-3">
          🔥 <span className="font-bold">12 day streak</span>
        </div>

        <div className="border border-white/20 rounded-xl px-4 py-3">
          ⏱️ <span className="font-bold">45 min today</span>
        </div>
      </div>

    </div>
  );
}