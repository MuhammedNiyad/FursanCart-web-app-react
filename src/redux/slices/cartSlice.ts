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
			console.log(action.payload);
			
		},
		qntityMinus: (state, action) => {
			console.log(action.payload);
			
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