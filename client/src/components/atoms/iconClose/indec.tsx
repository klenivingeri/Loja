import { WishlistContext } from '../../../context/whishlist.context'
import { useContext } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import './styles.scss'

interface IconCLoseProps {
    productId: number
}

export function IconCLose( {productId} : IconCLoseProps){

    const { removeItemWishlist } = useContext(WishlistContext)
    return(
        <div className="icon-close" onClick={() => removeItemWishlist(productId)} >
            <AiOutlineCloseCircle size={25} />
        </div>
    )
}