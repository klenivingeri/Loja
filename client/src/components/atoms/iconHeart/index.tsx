import { RiHeartFill } from 'react-icons/ri';
import './styles.scss'

interface IconHeartProps{
    color?:string;

}

export function IconHeart({ color }: IconHeartProps){

    return(
        <div className="icon-heart">
            <RiHeartFill color={color} size={25} />
        </div>
    )
}