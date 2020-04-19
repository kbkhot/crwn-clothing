import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage';
import {auth, createUserProfileDocument} from './firebase/FirbaseUtils';


class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentUser: null
    }

  }

 unsubscribeFromAuth = null;

 componentDidMount () {
   this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         });
         console.log (this.state);
       });
     } else {
       this.setState ({currentUser: userAuth});
     }
   });
 }

 componentWillUnmount () {
this.unsubscribeFromAuth();
 }

  render () {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route path= '/' exact component={HomePage} />
          <Route path= '/shop' exact component={ShopPage} />
          <Route path='/signin' exact component={SignInSignUpPage} />
        </Switch>
      </div>
    );

  }
  
}

export default App;
