import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect';

import './App.css';

import Header from './components/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-and-signup_page/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Accessories from './pages/accessories/accessories.component'

import Footer from './components/footer/footer.component'

import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selector'

class App extends React.Component {

  unsubscribFromAuth =null;

  componentDidMount(){
    const {setCurrentUser}=this.props;

    this.unsubscribFromAuth=auth.onAuthStateChanged(async userAuth=>{
      
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
    })

  }

  componentWillUnmount(){
    this.unsubscribFromAuth();
  }

  render(){
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/accessories' component={Accessories}/>
        <Route   exact path='/checkout' component={CheckoutPage}/>
        <Route   exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>): (<SignInAndSignUp />)} />
      </Switch>
      <Footer/>
    </div>
  );
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
