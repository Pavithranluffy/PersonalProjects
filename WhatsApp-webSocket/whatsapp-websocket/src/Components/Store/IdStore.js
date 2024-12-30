//You need to create a Store to store your state in the store 

import { configureStore } from "@reduxjs/toolkit";
import Idreducer from "../Slice/IdSlice";

const idStore = configureStore({
    reducer:{
        userID : Idreducer
    }
})

export default idStore;