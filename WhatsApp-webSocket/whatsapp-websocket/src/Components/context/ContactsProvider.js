import { createContext, useContext, useState } from "react";
import LocalStorage from "../Hooks/LocalStorage";



export const ContactContext = createContext();


export function useContact(){
    return useContext(ContactContext);
}

export function ContextContactProvider({children}){
    const [contact,setContact] = LocalStorage('contacts',[]);
    function createContact(id,name){
        setContact(prevcontacts=>{
            return[...prevcontacts,{id,name}]
        })
        console.log("The saved Contacts is"+contact);
        
        
    }
    return(
        <ContactContext.Provider value={{contact,createContact}}>
        {children}
        </ContactContext.Provider>
    )
}