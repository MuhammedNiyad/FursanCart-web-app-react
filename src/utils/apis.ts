/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import axios from "axios"
import Cookies from 'js-cookie';

const BASE_URL = 'http://fursancart.rootsys.in/api';
const LOCAL_URL = 'http://localhost:3010/api';

export const loginApi = async (props: any) => {
	try {
		console.log(props);
		const data = props;
		const response = await axios.post(`${BASE_URL}/auth/local/user/login`, data);
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
		const response = await axios.post(`${BASE_URL}/auth/local/user/sign-up`, data)
		if (response?.data.tokens) {
			const tokens = response?.data.tokens

			Cookies.set('accessToken', tokens.access_token);
			Cookies.set('refreshToken', tokens.refresh_token);
			const resData = JSON.stringify(response.data.res);
			Cookies.set('user', resData);
			// console.log('Cookie set successfully');
		}
		return response?.data
	} catch (error:any) {
		console.log(error);
		notification.error({
			message: error?.response?.data.message,
			placement: 'top'
		});
	}
}

export const getProducts = async () => {
	try {
		const response = await axios.get(`${LOCAL_URL}/product/all`);
		return response?.data;
	} catch (error:any) {
		console.log(error);
		notification.error({
			message: error?.response?.data.message,
			placement: 'top'
		});
	}
}