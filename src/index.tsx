import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { render } from 'react-dom';
import Products from './containers/products';

/** TODO: посмотреть что такое switch в react router*/
/** TODO: посмотреть что такое  props router*/

function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route path="/products/cart">
          Cart
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="*">
          Not Found
        </Route>
      </Switch>
    </Router>
  );
}

render(<AppRouter/> , document.getElementById('root'));
