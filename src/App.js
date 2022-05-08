import "./App.css";
import Cocktail from "./Cocktail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const More = () => {
    return <h2>More</h2>;
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bar of Liz</h1>
        <p>The perfected ratios of some of the best cocktails</p>
        <Router>
          <Link to="/more">More</Link>
        </Router>
        <hr />
      </header>
      <Cocktail />
      <Routes>
        <Route path="/more">
          <More />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
