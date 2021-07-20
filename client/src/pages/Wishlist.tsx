

import { Container } from "../components/atoms/container";
import { Galery } from "../components/organisms/galery";
import { H1 } from "../components/atoms/h1";
import { useState } from "react";
import { Card } from "../components/molecules/card";
import { WishlistContext } from '../context/whishlist.context'
import { useContext } from "react";
import { useEffect } from "react";

interface item{
    title: string,
    description: string,
    id: number,
    price:number,
    image: string
}
 
export default function Wishlist(){
    
    const {  wishlistList } = useContext(WishlistContext)

    const [products, setProducts] = useState<item[]>(wishlistList)
    
    useEffect(()=>{

        setProducts(wishlistList)

    },[wishlistList])
 
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