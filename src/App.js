import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import "./style.css";

function App() {
  return (
    <Router basename="/">
      <div className="grad-bg">
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
