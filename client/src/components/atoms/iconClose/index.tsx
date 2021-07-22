import { WishlistContext } from '../../../context/whishlist.context'
import { useContext } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import './styles.scss'

interface IconCLoseProps {
    productId: number
}

export function IconCLose( {productId} : IconCLoseProps){

    const { removeItemWishlist } = useContext( WishlistContext )

    return(
        
        <a 
            href="#!" 
            className="icon-close" 
            aria-label="icon-close" 
            onClick={() => removeItemWishlist(productId)} 
        >

            <AiOutlineCloseCircle className="icon" size={29} />

        </a>
    )
}