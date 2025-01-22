import { createContext, useState } from "react";
import LocalStorage from "../Hooks/LocalStorage";



export const ContactContext = createContext();


export function useContact(){
    return userContext(ContactContext);
}

export function ContextContactProvide({child}){
    const {contact,setContact} = LocalStorage('contacts',[]);
    function createContact(id,name){
        setContact(prevcontacts=>{
            return[...prevcontacts,{id,name}]
        })
        
    }
    return(
        <ContactContext.Provider value={{contact,createContact}}>
        {child}
        </ContactContext.Provider>
    )
}