import { createContext, useState } from "react";

export const Menu = createContext(true);
export default function MenuContext({children}){
    const [isopen , setIsOpen] =useState(true);
    return( 
    <Menu.Provider value={{ isopen , setIsOpen }}>
        {children}
    </Menu.Provider>
    )
}