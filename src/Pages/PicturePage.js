import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../Redux/store";
import * as actions from "../Redux/actions";

const PicturePage = () => {
  useEffect(() => {
    store.dispatch(actions.addRecentProduct(id));
  }, []);
  const { id } = useParams();
  return <div>PicturePage {id}</div>;
};

export default PicturePage;
