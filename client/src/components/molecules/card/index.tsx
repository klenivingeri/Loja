
import { IconCLose } from '../../atoms/iconClose/indec'
import { Img } from '../../atoms/img'
import { Vlap } from '../vlad'


import './styles.scss'


interface CardProps{
    
    key: number
    active?:string
    product:{
        title: string,
        description: string,
        id: number,
        price:number,
        image: string
    }

}

export function Card({product , active} : CardProps){
    
    const valor = product.price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
    return(

        <div className="card">
            { active ? <Vlap product={product} active={active}  /> : <IconCLose productId={product.id}/>  }
                
                
            <Img img="https://th.bing.com/th/id/OIP.4554DhjyLZbQy_B4j_96-gHaIq?pid=ImgDet&rs=1"   />

           <div className="title">{product.title}</div> 
           <div className="price">{valor}</div> 

        </div>
    )
}