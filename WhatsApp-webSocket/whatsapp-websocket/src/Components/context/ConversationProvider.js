import { createContext, useContext, useState } from "react";
import LocalStorage from "../Hooks/LocalStorage";



export const ConversationContext = createContext();


export function useConversation(){
    return useContext(ConversationContext);
}

export function ConversationProvider({children}){
    const [conversation,setConverstaion] = LocalStorage('conversation',[]);
    function createConversation(recipients){
        setConverstaion(prevconversation=>{
            return[...setConverstaion,{conversation,messages : []}]
        })

        
        
    }
    return(
        <ConversationContext.Provider value={{conversation,createConversation}}>
        {children}
        </ConversationContext.Provider>
    )
}