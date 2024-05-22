/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import axios from "axios"
import Cookies from 'js-cookie';
import APIClientPrivate from "./axios";
import { getUserId, getUserToken } from "../helpers/loggedUser";
import { useMutation } from "react-query";
import { useAddToCart } from './apis';

// const BASE_URL = 'http://fursancart.rootsys.in/api';
const LOCAL_URL = 'http://localhost:3010/api';

export const loginApi = async (props: any) => {
	try {
		console.log(props);
		const data = props;
		const response = await axios.post(`${LOCAL_URL}/auth/local/user/login`, data);
		if (response?.data.tokens) {
			const tokens = response?.data.tokens

			Cookies.set('accessToken', tokens.access_token);
			Cookies.set('refreshToken', tokens.refresh_token);
			const resData = JSON.stringify(response.data.res);
			Cookies.set('user', resData);
			// console.log('Cookie set successfully');
		}
		return response?.data
	} catch (error: any) {
		console.log(error);
		notification.error({
			message: error?.response?.data.message,
			placement: 'top'
		});
	}
};

export const registerApi = async (props: any) => {
	try {
		console.log(props);
		const data = props;
		const response = await axios.post(`${LOCAL_URL}/auth/local/user/sign-up`, data)
		if (response?.data.tokens) {
			const tokens = response?.data.tokens

			Cookies.set('accessToken', tokens.access_token);
			Cookies.set('refreshToken', tokens.refresh_token);
			const resData = JSON.stringify(response.data.res);
			Cookies.set('user', resData);
			// console.log('Cookie set successfully');
		}
		return response?.data
	} catch (error: any) {
		console.log(error);
		notification.error({
			message: error?.response?.data.message,
			placement: 'top'
		});
	}
};


// Product related apis start

export const getProducts = () => {
	return APIClientPrivate.get('/product/all', {
		headers: {
			Authorization: `Bearer ${getUserToken()}`
		}
	})
};

export const getOneProduct = (id:string | undefined | null) => {
	return APIClientPrivate.get(`/product/${id}`, {
		headers: {
			Authorization: `Bearer ${getUserToken()}`
		}
	})
}

// Product related apis end

export const getCategories = () => {
	return APIClientPrivate.get('/category/all',
		{
		headers: {
			Authorization: `Bearer ${getUserToken()}`
		}
	})
};

// add to cart

export const addToCart = (data:any) => {
	return APIClientPrivate.post('/product/add-to-cart', data,
		{
			headers: {
				Authorization: `Bearer ${getUserToken()}`
			}
		}
	)
}
export const useAddToCart = () => {
	return useMutation((data:any)=>addToCart(data))
}

export const getCartData = () => {
	return APIClientPrivate.get(`/product/cart/${getUserId()}`,
		{
			headers: {
				Authorization: `Bearer ${getUserToken()}`
			}
		})
}

// delete product from cart
export const deleteProductFromCart = (id: string) => {
	return APIClientPrivate.delete(`/product/remove-from-cart/${id}`)
}
export const useDeleteFromCart = () => {
	return useMutation((id:string)=>deleteProductFromCart(id))
}


// user delivery address 
export const AddDeliveryAddress = (data: any) => {
	return APIClientPrivate.post('/user/add-delivery-address', data, {
		headers: {
			Authorization: `Bearer ${getUserToken()}`
		}
	})
};

export const useAddDeliveryAddress = () => {
	return useMutation((data:any)=> AddDeliveryAddress(data))
}

// get user delivery address
export const getUserAddress = () => {
	return APIClientPrivate.get(`user/delivery-address/all?userId=${getUserId()}`)
}