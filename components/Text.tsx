import React from "react";

interface TextProps {
  children: React.ReactNode;
}

export function Text({ children }: TextProps) {
  return <p className="block text-xl md:text-base">{children}</p>;
}
