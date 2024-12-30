import { createSlice } from "@reduxjs/toolkit";

// Initialize the state
const initialState = ""; // Use a proper initial state variable name

// Create a Slice
export const IdSlice = createSlice({
    name: "Id", // Name of the slice
    initialState, // Correctly assign the initial state
    reducers: {
        setId: (state, action) => {
            return action.payload; // Return the new state
        },
    },
});

// Export the actions
export const { setId } = IdSlice.actions;

// Export the reducer
export default IdSlice.reducer;
