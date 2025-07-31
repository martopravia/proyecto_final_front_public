import { useNavigate } from "react-router";
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
    <div className="card  rounded-0" onClick={handleClick}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h4>USD {price}</h4>

        <p className="card-text">Disponible en 6 revestimientos</p>
      </div>
    </div>
  );
}
