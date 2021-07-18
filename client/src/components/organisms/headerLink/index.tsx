import { NavLink } from "../../atoms/navLink";
import {RiMapPin2Fill, RiHeartFill } from 'react-icons/ri';
import { IoIosCall } from 'react-icons/io'
import './styles.scss'
export function HeaderLink(){
    return(
        <div className="header-link">
            
        <NavLink Icon={RiMapPin2Fill} href="/Wishlist"> Cidade: São Paulo </NavLink>
        <NavLink Icon={IoIosCall} href="/Wishlist"> Centrar de atendimento </NavLink>
        <NavLink Icon={RiHeartFill} href="/Wishlist"> Lista de desejos </NavLink>

        </div>
    )
}