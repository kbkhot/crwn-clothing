import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path= '/' exact component={HomePage} />
        <Route path= '/shop' exact component={ShopPage} />
        <Route path='/signin' exact component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;