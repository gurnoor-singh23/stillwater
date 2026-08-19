import { useEffect, useState } from "react";

const CODE = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function useKonami() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    let pos = 0;
    function onKey(e) {
      if (e.key === CODE[pos]) {
        pos++;
        if (pos === CODE.length) {
          setActive(true);
          pos = 0;
        }
      } else {
        pos = 0;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return [active, () => setActive(false)];
}


