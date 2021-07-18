import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Wishlist from './pages/Wishlist'
const Routes = ()=>{
  return (
    <Switch>
      <Route path="/" exact="true" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Wishlist" exact component={Wishlist} />
    </Switch>
  );
};

export default Routes;