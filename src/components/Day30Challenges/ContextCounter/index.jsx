import ContextCounterProvider from "./Context/ContextCounter";
import { CounterContextApp } from "./ContextComponent/counterContextApp";

function ContextApp() {
  return (
    <ContextCounterProvider>
      <CounterContextApp />
    </ContextCounterProvider>
  );
}
export default ContextApp;
