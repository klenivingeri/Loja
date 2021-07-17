
interface CardProps{
    key: number
    product:{
        title: string,
        description: string,
        id: number,
    }

}

export function Card({product} : CardProps){
    return(
        <div className="card">
           {product.title}
        </div>
    )
}