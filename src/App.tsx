import { TimerProvider, CounterProvider } from "./context";
import { Timer } from "./components";
import "./styles.css";

export default function App() {
  return (
    <TimerProvider>
      <CounterProvider>
        <Timer />
      </CounterProvider>
    </TimerProvider>
  );
}
