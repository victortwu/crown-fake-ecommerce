import React from 'react'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-sign-up-page.component';

import { setCurrentUser } from './redux/user/users.actions'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux' 

import './App.css';


class App extends React.Component {
  
  
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if ( userAuth ) {
        // getting the documentRefObject
        const userRef = await createUserProfileDocument(userAuth)
        // getting back documentSnapShotObject --> has an 'exists: boolean' prop among others
        userRef.onSnapshot(snapShot => {
          //console.log('here is JUST snapShot Obj...', snapShot, 'here is snapShot.data()...', snapShot.data())
         // set state by creating new object with the id from snapShot and the data from snapShot.data()
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route 
              exact path='/signin' 
              render={()=> {
                return(
                  this.props.currentUser ?
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

}

const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser }
}

const mapDispatchToProps = dispatch => {
  return {                            // action object passed into dispatch()
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
