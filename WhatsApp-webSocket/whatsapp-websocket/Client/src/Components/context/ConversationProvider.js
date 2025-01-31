import { createContext, useCallback, useContext, useEffect, useState } from "react";
import LocalStorage from "../Hooks/LocalStorage";
import { useContact } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";



export const ConversationContext = createContext();


export function useConversation() {
    return useContext(ConversationContext);
}

export function ConversationProvider({ children, id }) {
    const [conversation, setConverstaion] = LocalStorage('conversation', []);
    const [selectConversationIndex, setSelectConversationIndex] = useState(0);
    const { contact } = useContact();
    const socket = useSocket();
    function createConversation(recipients) {
        setConverstaion(prevconversation => {
            return [...prevconversation, { recipients, messages: [] }]
        })

    }
    const addMessagetoConversation = useCallback(({ recipients, text, sender }) => {
        setConverstaion(prevconversation => {
            let madeChange = false;
            const newmessage = { sender, text };
            const newConversation = prevconversation.map(conversation => {
                if (ArrayEquality(conversation.recipients, recipients)) {
                    madeChange = true;
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newmessage]
                    }
                }
                return conversation;
            })
            if (madeChange) {
                return newConversation
            }
            else {
                return [
                    ...prevconversation,
                    { recipients: recipients, messages: [newmessage] }
                ]
            }
        })
    }, [setConverstaion]


    )
    useEffect(() => {
        if (socket === null) return
        socket?.on('receive-message', addMessagetoConversation)
        return () => {
            socket?.off('receive-message')
        }
    }, [socket, addMessagetoConversation])
    function sendmessage(recipients, text) {
        socket?.emit('send-message', { recipients, text })
        addMessagetoConversation({ recipients, text, sender: id })
    }

    //Now we can format our conversation into easy manner 
    //As we know conversation has stored the group of recipeints ids 
    //First wee need to iterate the conversatinon and inside we need to iterate the recipuents and after we need to find the matching
    //recipient id with contacts information we have 

    const formattedConversations = conversation.map((conversation, index) => {
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

        //To Format the Message
        const messages = conversation.messages.map(message => {

            // Find the contact that matches this Message Sender
            const foundContact = contact.find(contact => contact.id === message.sender);
            // If contact found, use its name,
            const name = (foundContact && foundContact.name)

            //Check it The Message is From me or not 
            const fromMe = id === message.sender
            return { ...message, senderName: name, fromMe }

        })

        //And also See this Current Conversation is selected 
        const selected = index === selectConversationIndex;

        // Return a new conversation object with formatted recipients
        return {
            ...conversation, // Keep existing conversation properties
            messages,//Send Messages In Proper Format
            recipients, // Add formatted recipients array
            selected //If this Conversation is selected
        };
    });
    const value = {
        conversation: formattedConversations,
        currentConversation: formattedConversations[selectConversationIndex],//To Track the current conversatoin we are doing this 
        sendmessage,
        selectConversationIndex: setSelectConversationIndex,
        createConversation
    }
    return (
        <ConversationContext.Provider value={value}>
            {children}
        </ConversationContext.Provider>
    )
}


function ArrayEquality(a, b) {
    if (a?.length !== b?.length) return true;
    a.sort();
    b.sort()

    return a.every((element, index) => {
        return element === b[index];
    })

}