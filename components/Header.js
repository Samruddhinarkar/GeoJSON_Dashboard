export default function Header() {
  return (
    <div className="border-b border-slate-700 bg-slate-900 px-6 py-4">
      <h1 className="text-2xl font-bold text-white">
        GeoJSON Dashboard
      </h1>

      <p className="mt-1 text-sm text-slate-400">
        Interactive geospatial visualization using Deck.gl
      </p>
    </div>
  );
}