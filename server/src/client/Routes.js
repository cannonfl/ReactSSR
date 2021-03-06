"use strict";

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/hi" component={() => 'Hi'} />
    </div>
  );
};
