import { createContext, useState, ReactNode } from 'react'

interface WishlistContextProps{

    children: ReactNode;

}

interface item{

    title: string,
    description: string,
    id: number,
    price:number,
    image: string

}

interface WishlistConteDatad{

    handlesaveLocalStorag:(product:any) => void;
    removeItemWishlist:( id : number ) => void;
    handleGetRouter:( router : string ) => void;
    getLocalStorage:() => void;
    wishlistList: item[]
    router:string;
    
}


export const WishlistContext = createContext({} as WishlistConteDatad )

export const WishlistContextProvider = ({ children, ...rest }: WishlistContextProps) => {

    const [router, setRouter ] = useState("/Home")

    const [wishlistList, setWishlistList] = useState<item[]> (() => {

        const storagedList = localStorage.getItem('@product:list'); // busca no  localStorage

            if (storagedList){

        return JSON.parse(storagedList);

        }
    return [];
    
    }) // setWishlistList


    function getLocalStorage(){

        const storagedList = localStorage.getItem('@product:list'); // busca no  localStorage
    
        if (storagedList){

        return JSON.parse(storagedList);

        }
        return [];

    } //getLocalStorage


    function handlesaveLocalStorag(product:any){
        
        const updateList = [...wishlistList];

        const productExists = updateList.find(productList => productList.id === product.id);

        if(productExists){

            removeItemWishlist(product.id)

        }else{
            
            updateList.push(product)

            setWishlistList(updateList)
            
            localStorage.setItem('@product:list', JSON.stringify(updateList));

        }


    } //handlesaveLocalStorag


    function removeItemWishlist( id : number ){

        const updateList = [...wishlistList];

        const removeItemWishlist = updateList.findIndex(product => product.id === id)
        
        if(removeItemWishlist >= 0){

            updateList.splice(removeItemWishlist, 1)

            localStorage.setItem('@product:list', JSON.stringify(updateList));

        }

        setWishlistList(updateList)
    } // removeItemWishlist


     function handleGetRouter( router : string ){
        setRouter(router)
        
     } //handleGetRouter

    return(

        <WishlistContext.Provider value={{
            handleGetRouter,
            handlesaveLocalStorag,
            getLocalStorage,
            removeItemWishlist,
            wishlistList,
            router
        }}>
            {children} 
        </WishlistContext.Provider>
         )

}

