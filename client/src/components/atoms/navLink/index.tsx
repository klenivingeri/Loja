import { useContext } from "react";
import { ElementType } from "react";
import { WishlistContext } from "../../../context/whishlist.context";
import './styles.scss'

interface NavLinkProps{
    Icon: ElementType;
    href: string;
    children: string;
}

export function NavLink({Icon, href , children , ...rest}: NavLinkProps){

     const { handleGetRouter } = useContext(WishlistContext)

    return(

        <a 
            href="#!" 
            onClick={() => handleGetRouter(href)} 
            className="nav-link" 
            aria-label="nav-link"
        >

            <Icon  size={20} />

            {children}
        
        </a>

    )

}