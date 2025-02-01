import "./App.css";
import Attribution from "./Attribution";
import Container from "./Container";

function App() {
  return (
    <>
      <img src="./assets/bg-pattern-bottom.svg" alt="" className="bubbleBottom" />
      <img src="./assets/bg-pattern-top.svg" alt="" className="bubbleTop" />
      <Container />
      <Attribution />
    </>
  );
}

export default App;
