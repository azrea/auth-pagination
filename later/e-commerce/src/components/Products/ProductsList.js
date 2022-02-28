import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import SingleProduct from "./SingleProduct";

const ProductsList = () => {
  const { filteredData, data, setRecent, recent } = useGlobalContext();

  useEffect(() => {
    console.log("recently viewed", recent);
  }, [recent]);

  const addToRecent = (id) => {
    let filtered = data.filter((item) => {
      return item.id === id;
    });

    setRecent((prev) => {
      return [...new Set([...prev, ...filtered])];
    });
  };

  if (filteredData.length > 0) {
    return (
      <div className="productsGrid">
        {filteredData.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              onClick={() => addToRecent(item.id)}
            >
              <SingleProduct key={item.name} {...item} />
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
        There are no products to match your Criteria. We offer our sincerest
        apologies and advise you not to be so picky next time.
      </h1>
    );
  }
};

export default ProductsList;
