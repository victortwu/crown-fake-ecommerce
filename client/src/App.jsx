import React, { useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// regular importing of components commented out

//import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import CheckoutPage from './pages/checkout/checkout.component';
// import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-sign-up-page.component';

// from redux config files

import { selectCurrentUser } from './redux/user/users.selectors';
import { checkUserSession } from './redux/user/users.actions'

import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
// from react-redux library
import { useSelector, useDispatch } from 'react-redux' 

import './App.css';

// lazy loading pages to split the code, this method can also leverage <Route/> by wrrapping with <Suspense /> component
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() =>import('./pages/checkout/checkout.component'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-signup-page/sign-in-and-sign-up-page.component'))

const App = () =>  { // not using connect HOC from redux anymore so no need to pass in state
  
  const currentUser = useSelector(selectCurrentUser) // replaces mapStateToProps
  const dispatch = useDispatch() // replaces mapDispatchToProps
  
  const location = useLocation()

  useEffect(()=> {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
      <div className="App">
        <Header />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <ErrorBoundary>
            <Suspense fallback={<div>loading...</div>}>
              
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
            
            </Suspense>  
            </ErrorBoundary>
          </Switch>
        </AnimatePresence>
      
      </div>
    );
  }

  // const mapStateToProps = createStructuredSelector({
  //   currentUser: selectCurrentUser,
  //  })
  
  //  const mapDispatchToProps = dispatch => {
  //    return {
  //      checkUserSession: ()=> dispatch(checkUserSession())
  //    }
  //  }
  
  export default App;




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