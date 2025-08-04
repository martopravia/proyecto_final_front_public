import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const products = useSelector((state) => state.products.items);
  console.log("products:", products);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-2 justify-content-center">
        <li className="breadcrumb-item">
          <Link className="text-dark" to="/">
            home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const productId = parseInt(name, 10);
          const matchedProduct = !isNaN(productId)
            ? products.find((p) => p.id === productId)
            : null;

          const displayName = matchedProduct
            ? matchedProduct.name
            : decodeURIComponent(name);

          return isLast ? (
            <li
              key={name}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {displayName}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item">
              <Link className="text-dark" to={routeTo}>
                {displayName}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
