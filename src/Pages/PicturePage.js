import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../Redux/store";
import * as actions from "../Redux/actions";
import { StyledPicturePage } from "../components/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBasketShopping,
  faBars,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const PicturePage = () => {
  useEffect(() => {
    store.dispatch(actions.addRecentProduct(id));
  }, []);
  const { id } = useParams();
  // get product from its id by filtering it out of the state. did it immediately to save a little bit of code rather than creating multiple variables per step.
  const products = store.getState().products.data.filter((product) => {
    return product.id === Number(id);
  });

  const { name, price, url } = products[0];

  return (
    <StyledPicturePage>
      <div className="container">
        <div className="title">
          <h1>{name}</h1>
          <h2>${price}</h2>
        </div>
        <div className="overlay">
          <div className="ctaButtons">
            <FontAwesomeIcon icon={faHeart} className="icon heart" />
            <FontAwesomeIcon icon={faBasketShopping} className="icon basket" />
          </div>
        </div>
        <img src={url} alt={name} />
      </div>
    </StyledPicturePage>
  );
};

export default PicturePage;
