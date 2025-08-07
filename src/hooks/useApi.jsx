import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { useMemo } from "react";
import { setProducts } from "../redux/productsSlice";
import { toast } from "react-toastify";

export const useApi = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const api = useMemo(
    () =>
      axios.create({
        baseURL: import.meta.env.VITE_API_URL,
      }),
    []
  );

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
      console.log("User logged in:", user, "to token:", token);

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
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const getProducts = async (params) => {
    try {
      const response = await api.get("/products", { params });
      dispatch(setProducts(response.data));
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getOrders = async (params) => {
    try {
      const response = await api.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  const getUser = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const updateUser = async (userId, updatedData) => {
    try {
      const response = await api.patch(`/users/${userId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  return {
    loginUser,
    registerUser,
    confirmOrder,
    getProducts,
    getOrders,
    getUser,
    updateUser,
  };
};
