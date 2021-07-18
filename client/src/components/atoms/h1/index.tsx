import './styles.scss'

interface h1Props{
    text: string;
}

export function H1( {text} :h1Props){

    return(

        <h1 className="h1"> 

        { text } 
        
        </h1>
    )
}