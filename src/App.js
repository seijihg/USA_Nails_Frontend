import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AnimatedBg, Transition } from "scroll-background";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import BodyContainer from "./components/Body/BodyContainer";
import FooterContainer from "./components/Footer/FooterContainer";

function App() {
  return (
    <div className="App">
      <AnimatedBg>
        <Transition height="0px" from="#000" to="#FFF" />
        <NavbarContainer />
      </AnimatedBg>

      <Route exact path="/" render={props => <BodyContainer {...props} />} />
      <FooterContainer />
    </div>
  );
}

export default App;
