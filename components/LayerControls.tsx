import { Eye, EyeOff } from 'lucide-react';

interface Props {
  visible: boolean;
  color: string;
  onToggle: () => void;
  onColorChange: (color: string) => void;
}

export default function LayerControls({
  visible,
  color,
  onToggle,
  onColorChange,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Layer Controls
        </h2>

        <button
          onClick={onToggle}
          className="rounded-lg bg-slate-700 p-2 transition hover:bg-slate-600"
        >
          {visible ? (
            <Eye className="text-white" size={18} />
          ) : (
            <EyeOff className="text-white" size={18} />
          )}
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Layer Color
        </label>

        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="h-12 w-full cursor-pointer rounded-lg border-none bg-transparent"
        />
      </div>
    </div>
  );
}