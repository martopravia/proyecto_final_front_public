import { useNavigate } from "react-router";
import { formatName } from "../utils/formatName";
import WishlistButton from "./WishlistButton";

export default function ProductCard({ id, name, price, image, featured }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="interactive card h-100 w-100 d-flex flex-column border rounded shadow overflow-hidden"
      onClick={handleClick}
    >
      {featured && <div className="corner-ribbon">FEATURED</div>}
      <img
        src={image}
        alt={name}
        className="card-img-top img-fluid object-fit-contain"
        style={{ height: "300px" }}
      />
      <WishlistButton
        className={"fs-5"}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <h5 className="card-title">{formatName(name)}</h5>
          <h4>USD {price}</h4>
          <p className="card-text">Avaible in stock</p>
        </div>
      </div>
    </div>
  );
}
