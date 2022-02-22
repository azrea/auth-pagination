import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Errorpage from "./Errorpage";
import Navbar from "./Navbar";
import { MainContainer } from "./StyledCocktails";
import SingleCocktail from "./SingleCocktail";

const Cocktails = () => {
  return (
    <MainContainer>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="/about">
            <Aboutpage />
          </Route>
          <Route path="*">
            <Errorpage />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default Cocktails;
