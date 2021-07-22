
import { useContext } from 'react';
import { WishlistContext } from '../../../context/whishlist.context'

export function Logo(){

    const { handleGetRouter } = useContext(WishlistContext)

    return(

        <h1 className="logo">

            <a 
                href="#!"
                onClick={() => handleGetRouter("/Home") }
            >
                
                MagaNets

            </a>
            
        </h1>
    )
}