import "./App.css";
import { Counter } from "./components/counter";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title title="hello title" />
      <Counter value={0} />
    </div>
  );
}

export default App;
