import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setHistory((prevHistory) => {
      const updatedHistory = replace
        ? [...prevHistory.slice(0, -1), newMode]
        : [...prevHistory, newMode];
      return updatedHistory;
    });
  };

  function back() {
    if (history.length > 1) {
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  return { mode: history[history.length - 1], transition, back };
}


