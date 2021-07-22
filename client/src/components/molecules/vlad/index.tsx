
import { IconHeart } from '../../atoms/iconHeart'
import { useContext } from 'react';
import { WishlistContext } from '../../../context/whishlist.context'
import './styles.scss'
import { useState } from 'react';

interface VlapProps{
    active?:boolean
    product:{
        title: string,
        description: string,
        id: number,
        price:number,
        image: string
    }
}
export function Vlap({product ,active} : VlapProps){

    const {handlesaveLocalStorag } = useContext(WishlistContext)

    const [colorActive, setActive] = useState(active)

    function handleaddlist(){

        handlesaveLocalStorag(product)

        if(colorActive === true){

            setActive(true)

        }else{
            
            setActive(false)
        }
    }

    return(

        <div 
            className="arrow" 
            aria-label="arrow" 
        >
           
            <a href="#!" 
                className="square" 
                onClick={() => handleaddlist()}
            >
                
                <IconHeart color={active ? "red" : "white" } />
                
                <div className="triangle">
                </div>

            </a>
            
        </div>

    )
}