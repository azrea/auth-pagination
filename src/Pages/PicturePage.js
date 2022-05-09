import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import store from "../Redux/store";
import * as actions from "../Redux/actions";
import { StyledPicturePage, CartAlert } from "../components/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

const PicturePage = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const cart = useSelector((store) => store.products.cart);
  useEffect(() => {
    store.dispatch(actions.addRecentProduct(id));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setSuccessMessage(""), 1200);
    return () => clearTimeout(timer);
  }, [successMessage, setSuccessMessage]);
  const { id } = useParams();
  // get product from its id by filtering it out of the state. did it immediately to save a little bit of code rather than creating multiple variables per step.
  const products = store.getState().products.data.filter((product) => {
    return product.id === Number(id);
  });

  const { name, price, url } = products[0];

  function shouldIBuy() {
    if (ensureUniqueItems(cart, id)) {
      console.log("true");
    } else {
      store.dispatch(actions.addToCart(id));
      setSuccessMessage("Added to cart successfully");
    }
  }

  function ensureUniqueItems(cart, id) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <NavBar />
      {successMessage && (
        <CartAlert>
          <h1>{successMessage}</h1>
        </CartAlert>
      )}
      <StyledPicturePage>
        <div className="container">
          <div className="title">
            <h1>{name}</h1>
            <h2>${price}</h2>
          </div>
          <div className="overlay">
            <div className="ctaButtons">
              <FontAwesomeIcon icon={faHeart} className="icon heart" />
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="icon basket"
                onClick={() => shouldIBuy()}
              />
            </div>
          </div>
          <img src={url} alt={name} />
        </div>
      </StyledPicturePage>
    </>
  );
};

export default PicturePage;
