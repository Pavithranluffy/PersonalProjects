
import bootstrap from "bootstrap";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import IdStore from "../src/Components/Store/IdStore";
import { Provider } from "react-redux";
function App() {
  return (
  <Provider store={IdStore}>
    <Login />
  </Provider>
   
  );
}


export default App;
