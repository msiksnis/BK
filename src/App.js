import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Subheader from "./components/subheader/Subheader";
import Cards from "./components/cards/Cards";

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
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
