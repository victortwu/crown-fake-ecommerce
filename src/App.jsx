import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-sign-up-page.component';

// from redux config files

import { selectCurrentUser } from './redux/user/users.selectors';
import { checkUserSession } from './redux/user/users.actions'

import { Route, Switch, Redirect } from 'react-router-dom'
// from react-redux library
import { connect } from 'react-redux' 

import './App.css';


const App = ( { checkUserSession, currentUser } ) =>  {
  
 
  
  useEffect(()=> {
    checkUserSession()
  }, [])

  
    
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route 
              exact path='/signin' 
              render={()=> {
                return(
                  currentUser ?
                  <Redirect to ='/'/>
                  :
                  <SignInAndSignUp/>
                  )
                }
              }
            />
        </Switch>
      
      </div>
    );
  }



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 })

 const mapDispatchToProps = dispatch => {
   return {
     checkUserSession: ()=> dispatch(checkUserSession())
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
    //   if ( userAuth ) {
    //     // getting the documentRefObject
    //     const userRef = await createUserProfileDocument(userAuth)
    //     // getting back documentSnapShotObject --> has an 'exists: boolean' prop among others
    //     userRef.onSnapshot(snapShot => {
    //       //console.log('here is JUST snapShot Obj...', snapShot, 'here is snapShot.data()...', snapShot.data())
    //      // set state by creating new object with the id from snapShot and the data from snapShot.data()
    //       setCurrentUser(
    //         {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       )
        
    //     })
    //   }

    //   setCurrentUser(userAuth)

      
    // })