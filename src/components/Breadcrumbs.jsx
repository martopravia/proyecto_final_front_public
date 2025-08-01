import { Link, useLocation } from "react-router";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-2">
        <li className="breadcrumb-item">
          <Link className="text-dark" to="/">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li
              key={name}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {decodeURIComponent(name)}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item">
              <Link className="text-dark" to={routeTo}>
                {decodeURIComponent(name)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
