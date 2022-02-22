import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="appLinkContainer">
      <Link to="/Words" className="appLink">
        Words Attempt
      </Link>

      <Link to="/TaskList" className="appLink">
        Tasks Tracker
      </Link>
      <Link to="/Manifestation" className="appLink">
        Manifestation Website Attempt
      </Link>
      <Link to="/StockPhotos" className="appLink">
        Stock Photos (partial)
      </Link>
      <Link to="/Page" className="appLink">
        Pagination
      </Link>
      <Link to="/RandomPerson" className="appLink">
        Random Person
      </Link>

      <Link to="/MarkdownPreview" className="appLink">
        Markdown Preview
      </Link>
      <Link to="/CartIndex" className="appLink">
        Cart
      </Link>
      <Link to="/ShoppingListApp" className="appLink">
        Shopping List
      </Link>
      <Link to="/ColorGeneratorApp" className="appLink">
        Color Generator
      </Link>
      <Link to="/SliderApp" className="appLink">
        Slider
      </Link>
      <Link to="/TabApp" className="appLink">
        Tab
      </Link>
      <Link to="/FoodMenuApp" className="appLink">
        Food Menu
      </Link>
      <Link to="/QandApp" className="appLink">
        QandApp
      </Link>
      <Link to="/ReviewApp" className="appLink">
        Reviews
      </Link>
      <Link to="/TourApp" className="appLink">
        Tours
      </Link>
      <Link to="Cocktails" className="appLink">
        Cocktails
      </Link>
    </div>
  );
};

export default Homepage;
