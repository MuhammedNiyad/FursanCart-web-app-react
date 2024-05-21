import { createSlice } from '@reduxjs/toolkit';
import { CartItems } from '../../lib/types';

interface CartState{
	cartData: CartItems[];
}

const initialState: CartState = {
	cartData:[]
}

export const cartSlice = createSlice({
	name: 'cartslice',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			console.log("in-redux: ", action.payload);
			const prodId = action.payload.id;
			const existProd = state.cartData.findIndex((product) => product.productId === prodId);
			if (existProd!== -1) {
				console.log('exist', existProd);
				
				state.cartData[existProd].quantity += 1;
			} else {
				console.log('create');
				
				state.cartData.push(action.payload);
			}	
		},
		qntityPlus: (state, action) => {
			const existInd = state.cartData.findIndex((prod) => prod.productId === action.payload);
			if (existInd !== -1) {
				state.cartData[existInd].quantity += 1;
			}
			
		},
		qntityMinus: (state, action) => {
			const existInd = state.cartData.findIndex((prod) => prod.productId === action.payload);
			if (existInd !== -1) {
				state.cartData[existInd].quantity -= 1;
			}
			
		},
		removeFrom: (state, action) => {
			const existProd = state.cartData.findIndex((product) => product.productId === action.payload);
			if (existProd !== -1) {
				state.cartData.splice(existProd, 1);
			}
		}
	}
})

export const { addToCart,qntityPlus,qntityMinus, removeFrom } = cartSlice.actions

export default cartSlice.reducer;