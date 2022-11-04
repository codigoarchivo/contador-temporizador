import { createContext } from "react";

interface ContextProps {
  counter: number;

  // method
  increment: () => void;
}

export const CounterContext = createContext({} as ContextProps);
