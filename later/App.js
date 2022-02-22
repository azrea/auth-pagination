import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TourApp from "./TourList/TourApp";
import FoodMenuApp from "./FoodMenu/FoodMenuApp";
import ReviewApp from "./Reviews/ReviewApp";
import QandApp from "./QandA/QandApp";
import TabApp from "./Tabs/TabApp";
import SliderApp from "./Sliders/SliderApp";
import ColorGeneratorApp from "./ColorGenerator/ColorGeneratorApp";
import ShoppingListApp from "./ShoppingList/ShoppingListApp";

import CartIndex from "./Cart/CartIndex";
import Homepage from "./Homepage";
import CocktailsIndex from "./Cocktails/CocktailsIndex";
import MarkdownPreviewIndex from "./MarkdownPreview/MarkdownPreviewIndex";
import ManifestationIndex from "./Manifestation/ManifestationIndex";
import RandomPersonIndex from "./RandomPerson/RandomPersonIndex";
import PageIndex from "./Page/PageIndex";
import StockPhotosIndex from "./StockPhotos/StockPhotosIndex";
import WordsIndex from "./Words/WordsIndex";
import TaskList from "./TaskList/TaskList";

const App = () => {
  return (
    <Router>
      <div className="homepage">
        <Link to="/" className="link">
          <h1>Home</h1>
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/TaskList">
          <TaskList />
        </Route>
        <Route path="/Words">
          <WordsIndex />
        </Route>
        <Route path="/StockPhotos">
          <StockPhotosIndex />
        </Route>
        <Route path="/Manifestation">
          <ManifestationIndex />
        </Route>
        <Route path="/Page">
          <PageIndex />
        </Route>
        <Route path="/RandomPerson">
          <RandomPersonIndex />
        </Route>
        <Route path="/MarkdownPreview">
          <MarkdownPreviewIndex />
        </Route>
        <Route path="/CartIndex">
          <CartIndex />
        </Route>
        <Route path="/ShoppingListApp">
          <ShoppingListApp />
        </Route>
        <Route path="/ColorGeneratorApp">
          <ColorGeneratorApp />
        </Route>
        <Route path="/SliderApp">
          <SliderApp />
        </Route>
        <Route path="/TabApp">
          <TabApp />
        </Route>
        <Route path="/FoodMenuApp">
          <FoodMenuApp />
        </Route>
        <Route path="/QandApp">
          <QandApp />
        </Route>
        <Route path="/ReviewApp">
          <ReviewApp />
        </Route>
        <Route path="/TourApp">
          <TourApp />
        </Route>
        <Route path="/Cocktails">
          <CocktailsIndex />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
