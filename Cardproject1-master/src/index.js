import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

// import indexRoutes from "routes/index.jsx";

import "./mycss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Router from "./Routers/Router.jsx";
import { store } from "Reducer/Reducer.js";
import { Provider } from "react-redux";
import Templates from "./layouts/Dashboard/Template.js";
import Card3 from "Cards/Card3.js";

// ReactDOM.render(<Card3 />, document.getElementById("root"));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<Card1 />, document.getElementById("root"));
