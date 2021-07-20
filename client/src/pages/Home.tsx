import { useMemo, useState } from "react";

import { Container } from "../components/atoms/container";
import { Galery } from "../components/organisms/galery";
import { Card } from "../components/molecules/card";
import { H1 } from "../components/atoms/h1";



interface item{
    title: string,
    description: string,
    id: number,
    price:number,
    image: string
}

export default function Home(){
    
    const [products, setProducts] = useState<item[]>([]);

    useMemo( () => {// chamando API
        fetch('http://localhost:4000/api/products/')
        .then(response => response.json())
        .then(data => setProducts(data.products))
    },[])
    
    
     function getLocalStorage(){

        const storagedList = localStorage.getItem('@product:list'); // busca no  localStorage
    
        if (storagedList){

            console.log('eu existo')

        return JSON.parse(storagedList);

        }
        return [];

    } // getLocalStorage 

    function checkedList(product:any){
        
        const updateList = [...getLocalStorage()];

        const productExists = updateList.find(productList => productList.id === product.id);

        if(productExists){
            return "red"
        }
        return "white"

    } // checkedList

    
    return(
        
            <Container background="white" padding={30} >
                <>
                    <H1 text="Home" />
                
                    <Galery>
                        <>
                            {products.map((product) => {

                            return(<Card key={product.id} product={product} active={checkedList(product)}  />)
                            })}
                        </>
                    </Galery>
                </>
            </Container>
        
    )
}