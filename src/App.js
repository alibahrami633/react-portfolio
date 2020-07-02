import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"



function App() {
  return (
    <Router>
      <>
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path={["/home"]} component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Home} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Wrapper>
        <Footer />
      </>
    </Router >
  );
}

export default App;
