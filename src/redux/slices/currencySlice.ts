import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	currencyState: 'AED',
	isInitialValue:false,
}

export const currencySlice = createSlice({
	name: 'currencySlice',
	initialState,
	reducers: {
		changeCurrency: (state, action) => {
			// console.log(action.payload);
			state.currencyState = action.payload;
		},
		IsSetInitalValue: (state, action) => {
			console.log(action.payload);
			
			state.isInitialValue = action.payload;
		}

	}
})

export const { changeCurrency, IsSetInitalValue } = currencySlice.actions;

export default currencySlice.reducer;