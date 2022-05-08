import "./App.css";
import Cocktail from "./Cocktail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import More from "./More";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bar of Liz</h1>
          <p>The perfected ratios of some of the best cocktails</p>
          <Link to="/more">More</Link>
          <hr />
        </header>
        <Routes>
          <Route exact path="/" element={<Cocktail />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
