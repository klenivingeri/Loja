import { IconSearch } from "../../atoms/iconSearch";
import { Input } from "../../atoms/input";
import './styles.scss'

export function Search(){
    return(

        <div 
            className="search" 
            aria-label="box-search" 
        >

            <IconSearch />
            
            <Input />

        </div>
    )
}