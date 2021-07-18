interface ImgProps{
    img: string;
    name?: string;
    id?:string
}

export function Img({ img, name, id }: ImgProps){
    return(
        <img id={id} className="" src={img} height="200" alt={name} />
    )
}