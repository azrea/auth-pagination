import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { StyledCartPage } from "../components/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.products.cart);

  return (
    <>
      <NavBar />
      <StyledCartPage>
        {/* need a picture of any image with an amount over zero 
          need its amount next to it with an increment and decrement button
          total at the end that changes as price goes up and down  */}
        {cart.length > 0 ? (
          <div className="cartContainer">
            <div className="itemSections">
              <h2>Item</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Subtotal</h2>
            </div>

            <div className="itemUnderline"></div>
            {cart.map((item) => {
              return <CartRow key={item.id} {...item} />;
            })}
            <div className="itemUnderline"></div>
          </div>
        ) : (
          <div className="cartDisclaimer">
            <h1>No Items in the cart</h1>
            <Link to={"/products"}>Continue shopping</Link>
          </div>
        )}
        ;
      </StyledCartPage>
    </>
  );
};

export default CartPage;

const CartRow = ({ url, amount, price }) => {
  return (
    <>
      <div className="itemContainer">
        <div>
          <img src={url} alt="" />
        </div>

        <div>
          <h2>{price}</h2>
        </div>

        <div className="quantityContainer">
          <FontAwesomeIcon icon={faPlus} className="quantityIcons" />
          <h2>{amount}</h2>
          <FontAwesomeIcon icon={faMinus} className="quantityIcons" />
        </div>

        <div>
          <h2>{price * amount}</h2>
        </div>
      </div>
    </>
  );
};
