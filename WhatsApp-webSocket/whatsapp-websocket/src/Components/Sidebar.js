import { useSelector } from "react-redux";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Conversation from "./Conversation";
import Contacts from "./Contacts";
import ConversationModal from "./ConversationModal";
import ContactModal from "./ContactModal";

const CONVERSATION_KEY = "Conversation";
const CONTACTS = "contacts";

export default function Slidebar() {
    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
    const [showModel,setShowModel] =useState(false);
    const userID = useSelector((state) => state.userID);
    const conversationOpen = activeKey === CONVERSATION_KEY;
    const closeModal = ()=>{
        setShowModel(false);
    }

    return (
        <div style={{ width: "450px" }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="d-flex flex-row justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATION_KEY}>
                            Conversation
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-end overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATION_KEY}>
                        <Conversation/>

                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS}>
                        <Contacts/>

                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-end small">
                    ID : <span className="text-muted">{userID} </span>

                </div>
                <Button onClick={()=> setShowModel(true)} className="rounded-0">
                    New { conversationOpen ?  'Conversation' : 'Contacts' }
                </Button>
            </Tab.Container>
            <Modal show={showModel} onHide={closeModal}>
                 {conversationOpen ? <ConversationModal  /> : <ContactModal closemodal={closeModal}  />}
                
            </Modal>
        </div>
    );
}
