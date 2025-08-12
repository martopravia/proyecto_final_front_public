import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { toggleFavorites } from "../redux/wishlistSlice";

export default function WishlistButton({ productId, className, style }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.wishlist.favorites);
  const { toggleFavorite } = useApi();
  const isFavorite = favorites.includes(productId);

  const handleClick = async (e) => {
    e.stopPropagation();
    dispatch(toggleFavorites(productId));
    await toggleFavorite(productId);
  };

  return (
    <i
      className={`interactive bi bi-suit-heart${
        isFavorite ? "-fill" : " text-secondary"
      } ${className}`}
      onClick={handleClick}
      style={style}
    />
  );
}
