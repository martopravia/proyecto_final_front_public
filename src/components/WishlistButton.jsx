import { useDispatch, useSelector } from "react-redux";

export default function WishlistButton({ productId, className, style }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    console.log("WishlistButton", { productId });
  };
  return (
    <i
      className={`interactive bi bi-suit-heart${
        false ? "-fill" : " text-secondary"
      } ${className}`}
      onClick={handleClick}
      style={style}
    />
  );
}
