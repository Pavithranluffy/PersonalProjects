
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setId } from "./Components/Slice/IdSlice";
import Dashboard from "./Components/Dashboard";
import { ContextContactProvider } from "./Components/context/ContactsProvider";
import { ConversationProvider } from "./Components/context/ConversationProvider";
function App() {
  const userId = useSelector((state) => state.userID);
  const [showDashboard, setDashBoard] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      setDashBoard(true);
    }
    if (localStorage.getItem("created-user-id")) {
      let a = localStorage.getItem("created-user-id");
      console.log("the loggeed storage", a);
      setDashBoard(true);
      dispatch(setId(a));


    }
  }, [])
  const dashboard = (<ContextContactProvider>
    <ConversationProvider>
    <Dashboard id={userId} />

    </ConversationProvider>
  </ContextContactProvider>)

  // Ensure correct slice key

  return (
    <>
    {showDashboard}
      {showDashboard ?
       dashboard : <Login />}

    </>

  );
}


export default App;
