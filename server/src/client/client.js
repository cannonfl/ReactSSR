"use strict";

import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes.js';

ReactDom.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  , document.querySelector("#root"));
