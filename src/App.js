import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

import {auth, createUserProfileDocument} from './firebase/FirbaseUtils';
import {setCurrentUser} from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelector';


class App extends React.Component {

 unsubscribeFromAuth = null;

 componentDidMount () {

  const {setCurrentUser} = this.props;
  // deconstructing this.props.setCurrentUser to use only setCurrentUser
  // this is coming from mapDispatchToProps

   this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
          setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           });
       });
     } 
       setCurrentUser (userAuth);
   });
 }


componentWillUnmount () {
this.unsubscribeFromAuth();
 }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route path= '/' exact component={HomePage} />
          <Route path= '/shop' exact component={ShopPage} />
          <Route path= '/checkout' exact component={CheckoutPage} />
          <Route path='/signin' exact render={()=> this.props.currentUser ? (<Redirect to="/"/>):(<SignInSignUpPage/>)} 
          />
          {/* Redirect is a component from react-router-dom. It will Redirect Route to mentioned path.
          render is a function which works like a component   */}
          
        </Switch>
      </div>
    );

  }
  
}

const mapStateToProps= createStructuredSelector ({
  currentUser: selectCurrentUser
});

// const mapStateToProps= ({user}) => ({
//   currentUser: user.currentUser
// });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
  // setCurrentUser is key used in the plain object. The value is set as a fuction which calls dispatch. 
  // action creater to be called is passed in dispatch. Here action creater takes the argument of 'user' so that is passed in it.
  // setCurrentUser key now becomes available as on props object to be used in the component. 
  // the key name is usually set same as the action creater name
  // the dispatch function sends the action creater to all reducers which sends to the sate
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

// for connect function there are 3 arguements. First is mapStateToProps, second is mapDispatchToProps, 3rd argument is the component itself. 
// in the example, since we dont need mapStateToProps for app, the value is set as null
