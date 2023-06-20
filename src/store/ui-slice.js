import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisisble: false, },
    reducers: {
        toggle(state){
            state.cartIsVisisble = !state.cartIsVisisble;
        }
    }
});
export const uiActions = uiSlice.actions;
export default uiSlice;