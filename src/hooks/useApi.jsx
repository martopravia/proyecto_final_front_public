import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/userSlice";
import { useMemo } from "react";
import {
  productsRequested,
  productsRequestFailed,
} from "../redux/productsSlice";
import { toast } from "react-toastify";
import { setFavorites } from "../redux/wishlistSlice";
import {
  categoriesRequested,
  categoriesRequestFailed,
} from "../redux/categoriesSlice";

export const useApi = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);

  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    instance.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          dispatch(logout());
          toast.info("You've been logged out");
        }
        return Promise.reject(error);
      }
    );

    return instance;
  }, [dispatch]);

  const loginUser = async (data) => {
    try {
      const {
        data: { user, token },
      } = await api.post("/tokens/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(login({ user, token }));
      dispatch(setFavorites(user.favorites));

      return token;
    } catch (error) {
      console.error("Error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const registerUser = async (data) => {
    try {
      await api.post("/users", data, {});
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const confirmOrder = async (orderData) => {
    try {
      const response = await api.post("/orders", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const getCategories = async (params) => {
    dispatch(categoriesRequested());
    try {
      const response = await api.get("/categories", { params });
      return response.data;
    } catch (error) {
      dispatch(categoriesRequestFailed(error.message));
      console.error("Error:", error);
    }
  };

  const getProducts = async (params) => {
    dispatch(productsRequested());
    try {
      const response = await api.get("/products", { params });
      return response.data;
    } catch (error) {
      dispatch(productsRequestFailed(error.message));
      console.error("Error:", error);
    }
  };

  const getOrders = async (params) => {
    try {
      const response = await api.get("/orders", {
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  const getUser = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const updateUser = async (userId, updatedData) => {
    try {
      const response = await api.patch(`/users/${userId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };
  const changePassword = async (userId, data) => {
    try {
      const response = await api.patch(
        `/users/${userId}/change-password`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error changing password:", error);
      throw error.response?.data?.message || "Error";
    }
  };

  const toggleFavorite = async (productId) => {
    try {
      const response = await api.patch(`users/${user.id}/favorites`, {
        productId,
      });
      return response.data;
    } catch (error) {
      console.error("Error toggling favorite product:", error);
    }
  };

  return {
    loginUser,
    registerUser,
    confirmOrder,
    getCategories,
    getProducts,
    getOrders,
    getUser,
    updateUser,
    changePassword,
    toggleFavorite,
  };
};
