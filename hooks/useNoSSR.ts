import { useEffect, useState } from "react";

export function useNoSSR() {
  const [canRender, setCanRender] = useState(false);
  useEffect(() => setCanRender(true), []);
  return canRender;
}
