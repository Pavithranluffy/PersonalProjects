import { createContext, useContext, useState } from "react";
import LocalStorage from "../Hooks/LocalStorage";
import { useContact } from "./ContactsProvider";



export const ConversationContext = createContext();


export function useConversation(){
    return useContext(ConversationContext);
}

export function ConversationProvider({children}){
    const [conversation,setConverstaion] = LocalStorage('conversation',[]);
    const [selectConversationIndex,setSelectConversationIndex] = useState(0);
    const {contact} = useContact();
    function createConversation(recipients){
        setConverstaion(prevconversation=>{
            return[...prevconversation,{recipients,messages : []}]
        })
        
    }

    //Now we can format our conversation into easy manner 
    //As we know conversation has stored the group of recipeints ids 
    //First wee need to iterate the conversatinon and inside we need to iterate the recipuents and after we need to find the matching
    //recipient id with contacts information we have 
    
    const formattedConversations = conversation.map((conversation,index) => {
        // For each conversation, process its recipients
        const recipients = conversation.recipients.map(recipientId => {
            // Find the contact that matches this recipient ID
            const foundContact = contact.find(contact => contact.id === recipientId);
            
            // If contact found, use its name, otherwise use the ID as fallback
            return {
                id: recipientId,
                name: foundContact ? foundContact.name : recipientId
            };
        });

        //And also See this Current Conversation is selected 
        const selected  = index === selectConversationIndex;
    
        // Return a new conversation object with formatted recipients
        return {
            ...conversation, // Keep existing conversation properties
            recipients, // Add formatted recipients array
            selected //If this Conversation is selected
        };
    });
    const value = {
        conversation : formattedConversations,
        currentConversation:formattedConversations[selectConversationIndex],//To Track the current conversatoin we are doing this 
        selectConversationIndex : setSelectConversationIndex,
        createConversation
    }
    return(
        <ConversationContext.Provider value={value}>
        {children}
        </ConversationContext.Provider>
    )
}