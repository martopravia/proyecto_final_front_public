import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { setProducts } from "../redux/productsSlice";
import axios from "axios";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-4" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
