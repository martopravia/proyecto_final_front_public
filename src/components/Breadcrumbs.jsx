import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { formatName } from "../utils/formatName";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const products = useSelector((s) => s.products.items);

  if (parts[0] === "products" && parts.length >= 3) {
    const [, slug, id] = parts;
    const product = products?.find((p) => String(p.id) === String(id));
    const label = formatName(product?.name || decodeURIComponent(slug));
    const url = `/products/${slug}/${id}`;

    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb m-2 justify-content-center">
          <li className="breadcrumb-item">
            <Link className="text-dark" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-dark" to="/products">
              Products
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {label.length > 20 ? label.slice(0, 20) + "…" : label}
          </li>
        </ol>
      </nav>
    );
  }

  const crumbs = [];
  let acc = "";
  parts.forEach((seg, idx) => {
    if (/^\d+$/.test(seg)) return;
    acc += `/${seg}`;
    const text = formatName(decodeURIComponent(seg));
    const isLast = idx === parts.length - 1;

    crumbs.push(
      isLast ? (
        <li key={seg} className="breadcrumb-item active" aria-current="page">
          {text.length > 20 ? text.slice(0, 20) + "…" : text}
        </li>
      ) : (
        <li key={seg} className="breadcrumb-item">
          <Link className="text-dark" to={acc}>
            {text.length > 20 ? text.slice(0, 20) + "…" : text}
          </Link>
        </li>
      )
    );
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-2 justify-content-center">
        <li className="breadcrumb-item">
          <Link className="text-dark" to="/">
            Home
          </Link>
        </li>
        {crumbs}
      </ol>
    </nav>
  );
}
