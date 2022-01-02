import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-sign-up-page.component';

import { Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    
    </div>
  );
}

export default App;
