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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
     createUserProfileDocument(user)
      // this.setState( { currentUser: user } )
      // console.log(user)
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
