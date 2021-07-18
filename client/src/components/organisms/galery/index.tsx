import { ReactElement } from 'react'

import './styles.scss'
interface ContentProps{
    children: ReactElement,
}

export function Galery({children}: ContentProps){
    return(
        <div className="galery">
            {children}
        </div>
    )
}