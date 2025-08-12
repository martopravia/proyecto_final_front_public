import { useEffect } from "react";
import { setWishlistProducts } from "../redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { Card } from "react-bootstrap";

export default function Wishlist() {
  const { products, favorites } = useSelector((state) => state.wishlist);
  const { getProducts } = useApi();
  const dispatch = useDispatch();
  useEffect(() => {
    if (favorites.length > 0) {
      getProducts({ limit: 50, ids: favorites }).then(
        (res) => res && dispatch(setWishlistProducts(res))
      );
    }
  }, []);
  return (
    <>
      {products.map((product) => {
        <Card
          className="p-3 bg-light border-0 w-100"
          style={{ maxWidth: "100%" }}
          key={product.id}
        >
          <h6 className="mb-2">{product.name}</h6>
        </Card>;
      })}
    </>
  );
}
