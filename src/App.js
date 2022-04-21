import "./App.css";
import Cocktail from "./Cocktail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bar of Liz</h1>
        <p>The perfected ratios of some of the best cocktails</p>
        <hr />
      </header>
      <Cocktail />
    </div>
  );
}

export default App;
