import { useMemo, useState } from "react";

import { Container } from "../components/atoms/container";
import { Galery } from "../components/organisms/galery";
import { Card } from "../components/molecules/card";
import { H1 } from "../components/atoms/h1";
import { useContext } from 'react';
import { WishlistContext } from '../context/whishlist.context'


interface item{
    title: string,
    description: string,
    id: number,
    price:number,
    image: string
}

export default function Home(){

    const { wishlistList } = useContext(WishlistContext)

    const [products, setProducts] = useState<item[]>([]);

    useMemo( () => {// chamando API

        if(!localStorage.getItem('@products') || localStorage.getItem('@products') === "" ){

            fetch('http://localhost:4000/api/products/')
            .then(response => response.json())
            .then(data => {
                
                setProducts(data.products)

                localStorage.setItem('@products', JSON.stringify(data.products))

                localStorage.setItem('@dataUpdateProduct', JSON.stringify(new Date().getDate()))

            })
           
        }else{

            const getProducts = localStorage.getItem('@products')

            const getDataProduct = localStorage.getItem('@dataUpdateProduct')

            if(getProducts) {

                setProducts(JSON.parse(getProducts))

                if(getDataProduct !== JSON.stringify(new Date().getDate())){ 

                    localStorage.setItem('@products', "")

                }
            }
    
        }

    },[])
    

    function checkedList(product:any){
        
        const updateList = [...wishlistList];

        const productExists = updateList.find(productList => productList.id === product.id);

        if(productExists){
            return true
        }
        return false

    } // checkedList

    return(
        
        <Container background="white" padding={30} >
            <>
                <H1 text="Home" />

                <Galery>

                    <>
                        {products.map((product:item) => {

                        return(
                            
                            <Card 
                                key={product.id} 
                                product={product}  
                                active={checkedList(product)}
                                card="home"
                            />)
                        
                        })}

                    </>

                </Galery>

            </>

        </Container>

    )
}