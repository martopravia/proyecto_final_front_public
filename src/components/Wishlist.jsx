import { useEffect } from "react";
import { setWishlistProducts } from "../redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";
import { finishLoading } from "../redux/productsSlice";

export default function Wishlist() {
  const { products, favorites } = useSelector((state) => state.wishlist);
  const { getProducts } = useApi();
  const dispatch = useDispatch();
  useEffect(() => {
    if (favorites.length > 0) {
      getProducts({ limit: 50, ids: favorites.toString() }).then(
        (res) => res && dispatch(setWishlistProducts(res))
      );
    } else {
      dispatch(setWishlistProducts([]));
    }
    dispatch(finishLoading());
  }, [favorites, dispatch]);

  if (favorites.length === 0) {
    return (
      <div className="w-100">
        <h5 className="mb-3">FAVOURITES</h5>
        <p>You dont have any products in your favourites list.</p>
      </div>
    );
  }

  return (
    <div className="w-100">
      <h5 className="mb-3">FAVOURITES</h5>
      {products.map((product) => (
        <Card className="p-3 mb-3 bg-light border-0" key={product.id}>
          <div className="d-flex align-items-center gap-3">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
            )}
            <div className="flex-grow-1">
              <h6 className="mb-1">{product.name}</h6>
              <p className="mb-0">U$S {Number(product.price).toFixed(2)}</p>
            </div>
            <Link to={`/products/${product.id}`}>
              <Button variant="dark" size="sm">
                Ver
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
