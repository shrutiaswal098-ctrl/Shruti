export default function ActivityTile() {
  return (
    <div className="bg-zinc-900 p-6 rounded-3xl">
      <h2 className="text-white text-2xl font-bold">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2 mt-6">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded bg-cyan-500/40"
          />
        ))}
      </div>
    </div>
  );
}