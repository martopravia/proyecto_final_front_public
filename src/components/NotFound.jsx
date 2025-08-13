// src/components/NotFound.jsx
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-5 fw-bold my-4">
        Oops, sorry — there’s nothing here
      </h1>
      <p className="text-muted mb-4">
        The product you’re looking for doesn’t seem to exist or may be
        unavailable.
      </p>
      <Link to="/products" className="btn btn-dark rounded-pill px-4">
        Browse our collection
      </Link>
    </div>
  );
}
