export default function ProductCard({
  id,
  name,
  description,
  stock,
  price,
  image,
}) {
  const handleClick = () => {
    console.log("clicked", name);
  };
  return (
    <div className="card  rounded-0" onClick={handleClick}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Disponible en 6 revestimientos</p>
      </div>
    </div>
  );
}
