'use client';

import Header from './Header';
import MetadataCard from './MetadataCard';
import LayerControls from './LayerControls';

interface Props {
  files: string[];
  selectedFile: string;
  onSelect: (file: string) => void;
  featureCount: number;
  geometryType: string;
  visible: boolean;
  color: string;
  onToggle: () => void;
  onColorChange: (color: string) => void;
}

export default function Sidebar({
  files,
  selectedFile,
  onSelect,
  featureCount,
  geometryType,
  visible,
  color,
  onToggle,
  onColorChange,
}: Props) {
  return (
    <div className="flex h-screen flex-col bg-slate-950">
      <Header />

      <div className="flex-1 space-y-6 overflow-auto p-6">
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 shadow-lg">
          <label className="mb-3 block text-lg font-semibold text-white">
            Select GeoJSON File
          </label>

          <select
            value={selectedFile}
            onChange={(e) => onSelect(e.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 p-3 text-white outline-none"
          >
            {files.map((file) => (
              <option key={file} value={file}>
                {file}
              </option>
            ))}
          </select>
        </div>

        <MetadataCard
          featureCount={featureCount}
          geometryType={geometryType}
        />

        <LayerControls
          visible={visible}
          color={color}
          onToggle={onToggle}
          onColorChange={onColorChange}
        />
      </div>
    </div>
  );
}