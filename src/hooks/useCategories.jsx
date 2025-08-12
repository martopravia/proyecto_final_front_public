import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useApi } from "./useApi";
import { productsReceived } from "../redux/productsSlice";
import { categoriesReceived } from "../redux/catogriesSlice";

const STALE_TIME = import.meta.env.VITE_STALE_TIME_SEC * 1000;

export const useCategories = () => {
  const { getCategories } = useApi();
  const dispatch = useDispatch();

  const {
    items,
    loading,
    error,
    lastFetched = 0,
  } = useSelector((state) => state.categories);

  const isStale = Date.now() - lastFetched > STALE_TIME;

  useEffect(() => {
    if (!loading && (!items.length || isStale)) {
      getCategories({ limit: 50 }).then(
        (res) => res && dispatch(categoriesReceived(res))
      );
    }
  }, []);

  return { categories: items, loadingCategories: loading, error };
};
