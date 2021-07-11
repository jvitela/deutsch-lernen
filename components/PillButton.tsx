import React from "react";

interface PillButtonProps {
  value: string;
  isDisabled?: boolean;
  onClick: () => void;
}

export function PillButton({ value, isDisabled, onClick }: PillButtonProps) {
  const status = isDisabled
    ? "border-gray-200 text-gray-300"
    : "border-blue-400 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-blue-500";
  return (
    <button
      className={`inline-block py-2 px-3 mb-2 border-2 bg-white rounded mr-2 ${status}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
