import { useParams } from "react-router";
import ProductList from "./ProductList";
import { useCategoryProducts } from "../hooks/useCategoryProducts";

export default function CategoryPage() {
  const { category } = useParams();
  const { products } = useCategoryProducts({ category });
  return (
    <>
      <div className="container mt-3">
        <ProductList products={products} />
      </div>
    </>
  );
}
