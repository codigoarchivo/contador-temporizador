import { CounterState } from "./";

type CounterActionType = { type: "[Timer] - Increment" };

export const counterReducer = (
  state: CounterState,
  action: CounterActionType
): CounterState => {
  switch (action.type) {
    case "[Timer] - Increment":
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
