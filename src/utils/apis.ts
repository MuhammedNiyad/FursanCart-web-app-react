import { useMutation } from "react-query";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from "antd";
import axios from "axios";
import { getUserId, getUserToken } from "../helpers/loggedUser";
import APIClientPrivate from "./axios";
import { API_URL } from "./urls";

// const BASE_URL = 'http://fursancart.rootsys.in/api';
// const LOCAL_URL = "http://localhost:3010/api";

export const loginApi = async (props: any) => {
  try {
    console.log(props);
    const data = props;
    const response = await axios.post(
      `${API_URL}/auth/local/user/login`,
      data
    );
    // if (response?.data.tokens) {
    // 	const tokens = response?.data.tokens

    // 	Cookies.set('accessToken', tokens.access_token);
    // 	Cookies.set('refreshToken', tokens.refresh_token);
    // 	const resData = JSON.stringify(response.data.res);
    // 	Cookies.set('user', resData);
    // 	// console.log('Cookie set successfully');
    // }

    if (response?.data) {
      const tokens = response?.data?.tokens;

      localStorage.setItem("accessToken", tokens.access_token);
      localStorage.setItem("refreshToken", tokens.refresh_token);
      const resData = JSON.stringify(response.data.res);
      localStorage.setItem("userData", resData);
    }

    return response?.data;
  } catch (error: any) {
    console.log(error);
    notification.error({
      message: error?.response?.data.message,
      placement: "top",
    });
  }
};

export const registerApi = async (props: any) => {
  try {
    console.log(props);
    const data = props;
    const response = await axios.post(
      `${API_URL}/auth/local/user/sign-up`,
      data
    );
    if (response?.data) {
      const tokens = response?.data?.tokens;

      localStorage.setItem("accessToken", tokens.access_token);
      localStorage.setItem("refreshToken", tokens.refresh_token);
      const resData = JSON.stringify(response.data.res);
      localStorage.setItem("userData", resData);
    }
    return response?.data;
  } catch (error: any) {
    console.log(error);
    notification.error({
      message: error?.response?.data.message,
      placement: "top",
    });
  }
};

// get user by id
export const getUserById = (id:string)=>{
  return APIClientPrivate.get(`/user/${id}`)
}

// Product related apis start

export const getProducts = () => {
  return APIClientPrivate.get("/product/all?status=active", {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

export const getOneProduct = (id: string | undefined | null) => {
  return APIClientPrivate.get(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

export const getProductByTags = (tag:any) => {
  return APIClientPrivate.get(`/product/all?tag=${tag}&status=active`)
}

// searchProduct
export const searchProduct = (search:any) => {
  return APIClientPrivate.get(`/product/search?s=${search}`)
}

// Product related apis end

export const getCategories = () => {
  return APIClientPrivate.get("/category/all", {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

// add to cart

export const addToCart = (data: any) => {
  return APIClientPrivate.post("/product/add-to-cart", data, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};
export const useAddToCart = () => {
  return useMutation((data: any) => addToCart(data));
};

export const getCartData = () => {
  return APIClientPrivate.get(`/product/cart/${getUserId()}`, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

// decrease quantity from cart
export const decreaseQntInCart = (data: any) => {
  return APIClientPrivate.delete(`/product/decrease-cart-quantity`, {
    data: data,
    headers: {
      "content-type": "application/json",
    },
  });
};
export const useDecreaseQnty = () => {
  return useMutation((data: any) => decreaseQntInCart(data));
};

// delete product from cart
export const deleteProductFromCart = (id: string) => {
  return APIClientPrivate.delete(`/product/remove-from-cart/${id}`);
};
export const useDeleteFromCart = () => {
  return useMutation((id: string) => deleteProductFromCart(id));
};

// user delivery address
export const AddDeliveryAddress = (data: any) => {
  return APIClientPrivate.post("/user/add-delivery-address", data, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

export const useAddDeliveryAddress = () => {
  return useMutation((data: any) => AddDeliveryAddress(data));
};

// get user delivery address
export const getUserAddress = () => {
  return APIClientPrivate.get(
    `user/delivery-address/all?userId=${getUserId()}`
  );
};

// edit address
export const editDlvryAddress = ({ id, data }: any) => {
  return APIClientPrivate.patch(`/user/update-delivery-address/${id}`, data);
};
export const useEditAddress = () => {
  return useMutation(({ id, data }: any) => editDlvryAddress({ id, data }));
};

// create order
export const createOrder = (data: any) => {
  return APIClientPrivate.post("/product/place-order", data, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};
export const useCreateOrder = () => {
  return useMutation((data: any) => createOrder(data));
};

export const getAllOrders = () => {
  return APIClientPrivate.get("/product/orders/all", {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};

// cancel order
export const cancelOrder = ({id,userId, reason}:any) => {
  return APIClientPrivate.patch(`/product/orders/cancel/${id}`,{userId:userId,reason:reason},{
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
};
export const useCancelOrder = () => {
return useMutation(({id,userId,reason}:any) => cancelOrder({id,userId,reason}));
};


// get brands
export const getBrands = () => {
  return APIClientPrivate.get('/brand/all')
}


// get all banner
export const getAllBanner = () => {
  return APIClientPrivate.get('/banner/all');
};


// get all delivery types
export const getAllDeliveryTypes = () => {
  return APIClientPrivate.get('/admin/delivery-type/all',
    {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      }
    }
  )
};


// review & rating 
export const createReview = (data: any) => {
  return APIClientPrivate.post('/product/review', data);
};
export const useCreateReview = () => {
  return useMutation((data: any) => createReview(data));
};