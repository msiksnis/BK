import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Subheader from "./components/subheader/Subheader";
import Cards from "./components/cards/Cards";
import Trending from "./components/trending/Trending";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Subheader />
        <Switch>
          <Route path="/">
            <Home />
            <Cards />
            <Trending />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
