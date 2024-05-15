import { createSlice } from '@reduxjs/toolkit';

interface CartItem{
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: string[];
	price: number;
	quantity: number;
	rating: number;
	stock: string;
	title: string;
}

interface CartState{
	cartData: CartItem[];
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
			const existProd = state.cartData.findIndex((product) => product.id === prodId);
			if (existProd!== -1) {
				console.log('exist', existProd);
				
				state.cartData[existProd].quantity += 1;
			} else {
				console.log('create');
				
				state.cartData.push(action.payload);
			}	
		},
		qntityPlus: (state, action) => {
			const existInd = state.cartData.findIndex((prod) => prod.id === action.payload);
			if (existInd !== -1) {
				state.cartData[existInd].quantity += 1;
			}
			
		},
		qntityMinus: (state, action) => {
			const existInd = state.cartData.findIndex((prod) => prod.id === action.payload);
			if (existInd !== -1) {
				state.cartData[existInd].quantity -= 1;
			}
			
		},
		removeFrom: (state, action) => {
			const existProd = state.cartData.findIndex((product) => product.id === action.payload);
			if (existProd !== -1) {
				state.cartData.splice(existProd, 1);
			}
		}
	}
})

export const { addToCart,qntityPlus,qntityMinus, removeFrom } = cartSlice.actions

export default cartSlice.reducer;