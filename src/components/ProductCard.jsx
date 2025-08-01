import { useNavigate } from "react-router";
import { formatName } from "../utils/formatName";

export default function ProductCard({
  id,
  name,

  price,
  image,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="interactive card h-100 w-100 d-flex flex-column border rounded shadow"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={name}
        className="card-img-top img-fluid"
        style={{ height: "350px", objectFit: "cover" }}
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
