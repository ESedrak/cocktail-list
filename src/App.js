import "./App.css";
import Cocktail from "./Cocktail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Switch>
        <Route path="/more">
          <More />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
