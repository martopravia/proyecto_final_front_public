import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="row g-2">
      {products.map((product) => (
        <div className="col-12 col-md-4" key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
