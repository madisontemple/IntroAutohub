import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/App";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Managed from "./pages/Managed";
import AboutAutohub from "./pages/AboutAutohub";
import CCenter from "./pages/CCenter";
import Benz from "./pages/Benz";
import SearchResult from "./pages/SearchResult";
import { NavLink } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';
import Root from "./client/Root";

ReactDOM.render(<Root />, document.getElementById("root"));
// serviceWorker.unregister();
