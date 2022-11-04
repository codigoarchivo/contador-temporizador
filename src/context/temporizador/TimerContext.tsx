import { createContext } from "react";

interface ContextProps {
  timer: number;

  // method
}

export const TimerContext = createContext({} as ContextProps);
