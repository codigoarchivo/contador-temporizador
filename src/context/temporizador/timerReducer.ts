import { TimerState } from "./";

type TimerActionType = { type: "[Timer] - Regressive"; payload: number };

export const timerReducer = (
  state: TimerState,
  action: TimerActionType
): TimerState => {
  switch (action.type) {
    case "[Timer] - Regressive":
      return {
        ...state,
        timer: action.payload
      };
    default:
      return state;
  }
};
