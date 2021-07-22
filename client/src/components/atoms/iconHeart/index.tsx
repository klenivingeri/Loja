import { RiHeartFill } from 'react-icons/ri';
import './styles.scss'

interface IconHeartProps{
    color?:string;
}

export function IconHeart({ color }: IconHeartProps){
   
    return(

        <div className="area-heart">
        <a  
            href="#!"
            className="icon-heart" 
            aria-label="icon-heart"
        >

            <RiHeartFill  color={color} size={25} />
            
        </a>
        </div>
    )
}