import { useConversation } from "./context/ConversationProvider"
import { OpenConversation } from "./OpenConversation";
import Slidebar from "./Sidebar"
export default function Dashboard(){
    const {currentConversation} = useConversation();
    return( 
        <div className="d-flex" style={{height:"100vh"}}>
            <Slidebar/>
            { currentConversation && <OpenConversation/>}
        </div>
        )
       
}