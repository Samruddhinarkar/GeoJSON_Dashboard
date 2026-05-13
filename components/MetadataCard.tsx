interface Props {
  featureCount: number;
  geometryType: string;
}

export default function MetadataCard({
  featureCount,
  geometryType,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Layer Metadata
      </h2>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Features</span>
          <span className="font-semibold text-white">
            {featureCount}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Geometry</span>
          <span className="font-semibold text-white">
            {geometryType}
          </span>
        </div>
      </div>
    </div>
  );
}