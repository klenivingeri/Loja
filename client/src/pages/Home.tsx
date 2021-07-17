import { useMemo } from "react";
import { useState, useEffect } from "react"
import { Container } from "../components/atoms/container";
import { Card } from "../components/molecules/card";


interface Repository{
    
        title: string,
        description: string,
        id: number,
    
}

export default function Home(){

    const [products, setRepositories] = useState<Repository[]>([]);
    useMemo( () => {// chamando API
        fetch('http://localhost:4000/api/products')
        .then(response => response.json())
        .then(data => setRepositories(data.products))
    },[]);
    
    
    return(
        
            <Container background="white" padding={40} >
                <>
                {products.map((product) => {
                  return(<Card key={product.id} product={product} />)
              })}
                </> 
            
            </Container>
        
    )
}