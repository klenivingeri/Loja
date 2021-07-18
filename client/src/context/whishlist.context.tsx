import { createContext, useState, ReactNode } from 'react'

interface WishlistContextProps{
    children: ReactNode;

}

interface WishlistConteDatad{
    handlesaveLocalStorag:(product:any) => void;
    getLocalStorage:() => void;
}


export const WishlistContext = createContext({} as WishlistConteDatad )

export const WishlistContextProvider = ({ children, ...rest }: WishlistContextProps) => {
    
    const [active, setActive] =useState("")

    function getLocalStorage(){

        const storagedList = localStorage.getItem('@product:list'); // busca no  localStorage
    
        if (storagedList){

        return JSON.parse(storagedList);

        }
        return [];

    } //getLocalStorage


    function handlesaveLocalStorag(product:any){
 
        const updateList = [...getLocalStorage()];

        const productExists = updateList.find(productList => productList.id === product.id);

        if(productExists){

            alert('Produto já existe na lista')
            

        }else{

            const newProdut = {
                    ...product, 
                }
            
            updateList.push(newProdut)

            
            
            localStorage.setItem('@product:list', JSON.stringify(updateList));

        }


    } //handlesaveLocalStorag


    return(
        <WishlistContext.Provider value={{
            handlesaveLocalStorag,
            getLocalStorage,
        }}>
            {children} 
        </WishlistContext.Provider>
         )

}

