import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// dispatch an action anytime the page is mounted.
// the action uses the page id as a payload and adds the page to a recents set
// if the set is greater than 4 then the earliest item is removed automatically to make room.
// the recents tab is then used to display the recently visited items
