import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { formatName } from "../utils/formatName";
import { toast } from "react-toastify";
import { resetStep } from "../redux/checkoutSlice";
import WishlistButton from "./WishlistButton";
import { useCategoryProducts } from "../hooks/useCategoryProducts";
import NotFound from "./NotFound"; // ⬅ nuevo import

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, loadingProducts } = useCategoryProducts();

  if (loadingProducts) {
    return <div>Loading...</div>;
  }

  const product = products.find((p) => p.id == productId);

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
      dispatch(resetStep());
    } else {
      toast.warning(`${formatName(product.name)} out of stock!`);
    }
  };

  const { id, name, description, price, stock, image } = product;

  const colors = [
    { name: "Charcoal Gray", hex: "#36454F" },
    { name: "Slate Blue", hex: "#6A7BA2" },
    { name: "Olive Green", hex: "#708238" },
    { name: "Terracotta", hex: "#E2725B" },
    { name: "Warm Taupe", hex: "#D2B1A3" },
    { name: "Navy Blue", hex: "#2C3E50" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Cream", hex: "#F5F5DC" },
    { name: "Rust", hex: "#B7410E" },
    { name: "Mustard Yellow", hex: "#D4A017" },
    { name: "Deep Burgundy", hex: "#800020" },
    { name: "Dusty Rose", hex: "#C08081" },
    { name: "Midnight Blue", hex: "#191970" },
    { name: "Mahogany", hex: "#4A0100" },
    { name: "Walnut Brown", hex: "#5C4033" },
    { name: "Ebony", hex: "#555D50" },
    { name: "Ash Gray", hex: "#B2BEB5" },
    { name: "Sage", hex: "#B2AC88" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Pewter", hex: "#8E8E8E" },
  ];

  return (
    <div className="container-fluid">
      <div className="row flex-column flex-md-row">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            className="img-fluid border-0 object-fit-contain"
            style={{ maxHeight: "80vh" }}
            src={image}
            alt={name}
          />
        </div>
        <div className="col-md-6 d-flex">
          <div className="container p-5 d-flex flex-column justify-content-center align-content-center">
            <div className="d-flex justify-content-between">
              <h2>{formatName(name)}</h2>
              <WishlistButton productId={id} className="fs-3" />
            </div>
            <p>{description}</p>
            <hr />
            <div className="row">
              <div className="col-6 d-flex flex-column justify-content-between">
                <p className="fs-4">
                  U$S {Number(price).toLocaleString("de-DE")}
                </p>
                <p>Price without shipping</p>
                <div className="d-flex justify-content-start gap-2 mb-4">
                  {colors.slice(0, 5).map((color, i) => (
                    <div
                      key={i}
                      className="furniture-color rounded-circle border border-2"
                      style={{
                        height: "16px",
                        width: "16px",
                        backgroundColor: color.hex,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="col-6">
                <p>
                  <span className="fw-bold">Dimensions: </span> 120 cm diameter
                  × 75 cm height
                </p>
                <p>
                  <span className="fw-bold">Materials: </span> Solid cherry wood
                  top, powder-coated black iron legs
                </p>
                <p>
                  <span className="fw-bold">Warranty: </span> 2 years
                </p>
                <p>
                  <span className="fw-bold">Stock: </span> {stock}
                </p>
              </div>
            </div>
            <button
              className="btn btn-dark rounded-pill w-100 mt-2"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>

            <Link
              to="/products"
              className="btn btn-outline-dark rounded-pill w-100 my-2"
            >
              Continue Shopping...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
