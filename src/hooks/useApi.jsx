import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useMemo } from "react";
import { setProducts } from "../redux/productsSlice";

export const useApi = () => {
  const dispatch = useDispatch();

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
      } = await api.post("/tokens", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(login({ user, token }));
      toast.success("Login successful!");
      return token;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const registerUser = async (formData) => {
    try {
      await api.post("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error:", error);
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

  return {
    loginUser,
    registerUser,
    getProducts,
  };
};
