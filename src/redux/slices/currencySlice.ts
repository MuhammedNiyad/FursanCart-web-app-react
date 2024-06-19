import { createSlice } from "@reduxjs/toolkit";



const initialState = {
	currencyState:'AED'
}

export const currencySlice = createSlice({
	name: 'currencySlice',
	initialState,
	reducers: {
		changeCurrency: (state, action) => {
			console.log(action.payload);
			state.currencyState = action.payload;
		}
	}
})

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;