import './styles.scss'
import {ReactElement} from 'react'

interface ContainerProps{
    children: ReactElement;
    background:string;
    padding:number;
}

export function Container({children, background, padding} : ContainerProps){
    return(
        <div className="container" style={{padding:padding, background:background }}>
            {children}
        </div>
    )
}