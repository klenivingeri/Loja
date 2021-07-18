import { ElementType,  } from "react";
import { Link } from "react-router-dom";
import './styles.scss'
interface NavLinkProps{
    Icon: ElementType;
    href: string;
    children: string;
}

export function NavLink({Icon, href , children , ...rest}: NavLinkProps){
    return(
        <div className="nav-link">
            <Icon  size={20} />
            <Link to={href}>{children}</Link>
        </div>
    )

}