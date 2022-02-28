import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { StyledRecentTab } from "./styledHero";

const RecentTab = () => {
  const { recent } = useGlobalContext();

  if (recent.length > 0) {
    return (
      <StyledRecentTab>
        <h1>Items you have viewed so far</h1>
        <div className="viewedItems">
          {recent.map((item) => {
            return (
              <Link to={`/products/${item.id}`}>
                <img key={item.id} src={item.url} alt="" />
              </Link>
            );
          })}
        </div>
      </StyledRecentTab>
    );
  } else
    return (
      <StyledRecentTab>
        <h1>Take a look at our stock. We promise you will be impressed.</h1>
      </StyledRecentTab>
    );
};

export default RecentTab;
