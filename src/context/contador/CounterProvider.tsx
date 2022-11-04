import { FC, useReducer, ReactNode } from "react";
import { counterReducer, CounterContext } from "./";

export interface CounterState {
  counter: number;
}

interface Props {
  children: ReactNode;
}

const COUNTER_INITIAL_STATE: CounterState = {
  counter: 0
};

export const CounterProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);

  const increment = () => {
    dispatch({ type: "[Timer] - Increment" });
  };

  return (
    <CounterContext.Provider
      value={{
        ...state,

        // method
        increment
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
