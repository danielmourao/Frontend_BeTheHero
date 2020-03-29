import React from "react";
import "./global.css";
import Routes from "./routes";

function App() {
  //const [counter, setCounter] = useState(0);
  // o metodo useState retorna um array com duas posicoes
  // a primeira delas e o valor real da variave
  // a segunda e uma funcao de atusalizacao
  //function increment() {
  //setCounter(counter + 1);
  //}

  return (
    <div>
      {/* <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button> */}
      <Routes />
    </div>
  );
}

export default App;
