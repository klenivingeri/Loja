interface ImgProps{
    img: string;
    name?: string;
    id?:string
}

export function Img({ img, name, id }: ImgProps){
    return(

        <img 
            id={id}
            src={img}  
            alt={name} 
            className="image" 
            aria-label="image-product" 
            height="200" 
        />
        
    )
}