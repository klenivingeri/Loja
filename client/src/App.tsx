import React, { useContext, useState, useEffect } from 'react';
//import Routes from './routes'
import { Header } from './components/organisms/header';

import { WishlistContext } from './context/whishlist.context'
import Wishlist from './pages/Wishlist';
import Home from './pages/Home';

import './App.scss'

function App() {
  const { router  } = useContext(WishlistContext)
  const [ routerActiva, setRouterActiva ] = useState(router)

  useEffect( () => {

    setRouterActiva(router)

  }, [router])

  console.log(routerActiva)
  return (
    <div className="App" aria-label="App">

          <Header />
          { routerActiva === "/Home" ? <Home /> : <Wishlist/> }

    </div>
  );
}

export default App;
