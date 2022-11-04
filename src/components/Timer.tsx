import { useContext } from "react";
import { AiFillAlert } from "react-icons/ai";
import { CounterContext, TimerContext } from "../context";
import { Resp } from "./";
import { clicks } from "../databases";

export const Timer = () => {
  const { timer } = useContext(TimerContext);

  const { counter, increment } = useContext(CounterContext);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px"
        }}
      >
        <div className={"time__list"}>
          <h1>Time</h1>
          <h2>{timer}</h2>
        </div>
        <div className={"time__list"}>
          <h1 style={{ fontSize: "16px" }}>
            {timer !== 0 ? "Procesando..." : "Resultado"}
          </h1>
          <h1>{timer !== 0 ? 0 : counter}</h1>
          <div>
            {clicks.map((click, key) => (
              <Resp key={key} click={click} timer={timer} counter={counter} />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <button
        disabled={timer !== 0 ? false : true}
        onClick={increment}
        className="btn btn-primary"
      >
        {timer !== 0 ? <AiFillAlert fontSize={25} /> : "Tiempo Agotado"}
      </button>
      <hr />
    </div>
  );
};
