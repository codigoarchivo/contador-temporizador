import { FC, useReducer, ReactNode, useEffect } from "react";
import { timerReducer, TimerContext } from "./";

export interface TimerState {
  timer: number;
}

interface Props {
  children: ReactNode;
}

const TIMER_INITIAL_STATE: TimerState = {
  timer: 10
};

export const TimerProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, TIMER_INITIAL_STATE);

  useEffect(() => {
    var interval = setInterval(function () {
      if (state.timer === 0) {
        clearInterval(interval);
      } else {
        dispatch({ type: "[Timer] - Regressive", payload: state.timer - 1 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <TimerContext.Provider
      value={{
        ...state

        // method
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
