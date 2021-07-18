

import { Container } from "../components/atoms/container";
import { Galery } from "../components/organisms/galery";
import { H1 } from "../components/atoms/h1";
import { useState } from "react";
import { Card } from "../components/molecules/card";

interface item{
    title: string,
    description: string,
    id: number,
    price:number,
    image: string
}

export default function Wishlist(){


    const [products, setProducts] = useState<item[]>(()=>{
        const storagedList = localStorage.getItem('@product:list'); // busca no  localStorage

        if (storagedList){

        return JSON.parse(storagedList);

        }
    return [];

    })
    
    console.log(products)
    
    


    return(
        <Container background="white" padding={30} >
        <>
            <H1 text="Home > Lista de desejos" />
            <Galery>
                <>
                <>
                            {products.map((product) => {

                            return(<Card key={product.id} product={product}  />)
                            })}
                        </>
                </>
            </Galery>
        </>
    </Container>
    )
}