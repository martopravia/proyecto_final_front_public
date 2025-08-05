import { useEffect } from "react";

export function useKeyDown(key, callback) {
  useEffect(() => {
    const handle = (e) => {
      if (e.key === key) callback(e);
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [key, callback]);
}
