import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Subheader from "./components/subheader/Subheader";
import Cards from "./components/cards/Cards";
import Trending from "./components/trending/Trending";
import AppAdd from "./components/appAdd/AppAdd";
import Offers from "./components/offers/Offers";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Subheader />
        <Switch>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/about-bk">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
            <Cards />
            <Trending />
            <AppAdd />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
