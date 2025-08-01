import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { formatName } from "../utils/formatName";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  const product = products.find((product) => product.id === Number(productId));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { name, description, price, image } = product;
  return (
    <div className="container-fluid">
      <div className="row flex-column flex-md-row">
        <div className="col-md-6">
          <img className="img-fluid border-0" src={image} alt={name} />
        </div>
        <div className="col-md-6 d-flex">
          <div className="container p-5 d-flex flex-column justify-content-center align-content-center">
            <h2>{formatName(name)}</h2>
            <p>{description}</p>
            <hr />
            <p className="fs-4">{price} USD</p>
            <p>Price without shipping</p>
            <button
              className="btn btn-dark rounded-pill w-100"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
