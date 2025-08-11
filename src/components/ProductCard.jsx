import { useNavigate } from "react-router";
import { formatName } from "../utils/formatName";
import WishlistButton from "./WishlistButton";

export default function ProductCard({
  id,
  name,
  price,
  image,
  featured,
  stock,
  category: { name: categoryName },
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`);
  };

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

  const inStock = stock > 0;

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
        productId={id}
        className={"fs-5"}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
        <div className="row">
          <div className="col mb-0">
            <span className="d-block text-secondary">
              {formatName(categoryName.slice(0, -1))}
            </span>
            <span className="d-block fs-4">{formatName(name)}</span>
            <span className="text-muted">
              U$S {Number(price).toLocaleString("de-DE")}
            </span>
          </div>
          <div className="col mb-0 text-end align-content-end">
            <div className="d-flex justify-content-end gap-2 mb-2">
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
            <span className="text-muted">
              {inStock ? "Available" : "Out of stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
