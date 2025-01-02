
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useDispatch, useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard";
import { useEffect, useState } from "react";
import { setId } from "./Components/Slice/IdSlice";
function App() {
    const userId = useSelector((state) => state.userID);
    const [showDashboard,setDashBoard] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(userId){
        setDashBoard(true);
      }
      if(localStorage.getItem("created-user-id")){
        let a = localStorage.getItem("created-user-id");
        console.log("the loggeed storagae",a);
        setDashBoard(true);
        dispatch(setId(a));

        
      }
    },[])
 
     // Ensure correct slice key

  return (
  <>
  {showDashboard ? <Dashboard/>:  <Login /> }
  
  </>
   
  );
}


export default App;
