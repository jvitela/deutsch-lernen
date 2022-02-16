import React from "react";

interface ProgressBarProps {
  total: number;
  progress: number;
}

export function ProgressBar({ progress, total }: ProgressBarProps) {
  const percentage = (progress / total) * 100;
  return (
    <div className="flex">
      <div className="flex grow bg-gray-200 rounded-full p-1">
        <div
          className="bg-blue-600 p-0.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-xs ml-2">
        {progress} / {total}
      </div>
    </div>
  );
}
