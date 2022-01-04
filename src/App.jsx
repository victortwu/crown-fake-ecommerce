import React from 'react'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-sign-up-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Route, Switch } from 'react-router-dom'

import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if ( userAuth ) {
        // getting the documentRefObject
        const userRef = await createUserProfileDocument(userAuth)
        // getting back documentSnapShotObject --> has an 'exists: boolean' prop among others
        userRef.onSnapshot(snapShot => {
          //console.log('here is JUST snapShot Obj...', snapShot, 'here is snapShot.data()...', snapShot.data())
         // set state by creating new object with the id from snapShot and the data from snapShot.data()
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }

      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      
      </div>
    );
  }

}

export default App;
