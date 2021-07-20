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
    getLocalStorage:() => void;
    removeItemWishlist:( id : number ) => void;
    wishlistList: item[]
}


export const WishlistContext = createContext({} as WishlistConteDatad )

export const WishlistContextProvider = ({ children, ...rest }: WishlistContextProps) => {
    
    const [active, setActive] = useState("")

    const [wishlistList, setWishlistList] =useState<item[]>(()=>{

        const storagedList = localStorage.getItem('@product:list'); 

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
 
        const updateList = [...getLocalStorage()];

        const productExists = updateList.find(productList => productList.id === product.id);

        if(productExists){

            alert('Produto já adicionado na Lista de Desejos')

        }else{

            const newProdut = {
                    ...product, 
                }
            
            updateList.push(newProdut)

            localStorage.setItem('@product:list', JSON.stringify(updateList));

        }

    } //handlesaveLocalStorag



    function removeItemWishlist( id : number ){

        const updateList = [...getLocalStorage()];

        const removeItemWishlist = updateList.findIndex(product => product.id === id)

        
        if(removeItemWishlist >= 0){
            updateList.splice(removeItemWishlist, 1)
            localStorage.setItem('@product:list', JSON.stringify(updateList));

        }

        setWishlistList(updateList)
    } // removeItemWishlist



    return(
        <WishlistContext.Provider value={{
            handlesaveLocalStorag,
            getLocalStorage,
            removeItemWishlist,
            wishlistList
        }}>
            {children} 
        </WishlistContext.Provider>
         )

}

