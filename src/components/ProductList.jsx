import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="row g-5 d-flex justify-content-center">
      {products.map((product) => (
        <div
          className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          key={product.id}
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
