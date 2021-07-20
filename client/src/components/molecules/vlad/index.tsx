
import { IconHeart } from '../../atoms/iconHeart'
import { useContext } from 'react';
import { WishlistContext } from '../../../context/whishlist.context'
import './styles.scss'
import { useState } from 'react';

interface VlapProps{
    active?:string
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
    const [color, setActive] = useState(active)

    function handleaddlist(){

        handlesaveLocalStorag(product)

        setActive("red")
    }

    return(
        <div className="arrow">
           
            <div className="square" onClick={() => handleaddlist()}>
                
                    <IconHeart color={color} />
                
                <div className="triangle">
                
                </div>
            </div>
            
        </div>
    )
}