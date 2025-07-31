import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductPage() {
  const { productId } = useParams();
  const product = {
    name: "Sillon Exótico",
    description: "Muy detallado, de alta calidad",
    stock: 4,
    price: 500.0,
    image:
      "https://media.roche-bobois.com/is/render/rocheboboisRender/bubble_mini_techno_fauteuil_pers_02?wid=1120&fmt=webp&resMode=sharp2&network=on&bfc=on&obj=Revp&color=224,205,28",
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { name, description, stock, price, image } = product;
  return (
    <div className="container-fluid">
      <div className="row flex-column flex-md-row">
        <div className="col-md-6">
          <img className="img-fluid border-0" src={image} alt={name} />
        </div>
        <div className="col-md-6">
          <div className="container p-5">
            <h2>{name}</h2>
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
