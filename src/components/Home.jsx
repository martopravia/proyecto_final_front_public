import { useNavigate } from "react-router";
import { formatName } from "../utils/formatName";
import { useCategoryProducts } from "../hooks/useCategoryProducts";
import { useCategories } from "../hooks/useCategories";

function Home() {
  const navigate = useNavigate();

  const { products, loadingProducts } = useCategoryProducts();
  const { categories, loadingCategories } = useCategories();

  if (loadingProducts || loadingCategories) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div
          className="spinner-border text-dark"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  const randomProducts = products
    .filter((product) => product.featured === true)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <div className="my-5">
      <h1 className="text-center my-5">Choose your signature piece</h1>

      <div className="row d-flex justify-content-center m-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="col-12 col-md-6 col-xl-4 mb-4 mt-5 d-flex flex-column"
            onClick={() => handleClick(category.name)}
          >
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
              <img
                src={category.image}
                className="img-fluid img-home interactive"
                alt={category.alias}
              />
            </div>
            <h4 className="mt-3 text-center">{category.alias}</h4>
          </div>
        ))}
      </div>
      <hr />
      <h2 className="text-center my-5">
        Curated designs for distinguished spaces
      </h2>
      <div className="row m-4">
        <div className="col-12 scroll-container d-flex overflow-y-hidden d-flex gap-5 pb-5">
          {randomProducts.map((product) => (
            <div
              key={product.id}
              className="scroll-item interactive text-center col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column justify-content-center"
              style={{
                maxWidth: "300px",
                minWidth: "200px",
              }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div
                className="scroll-image-card w-100 overflow-y-hidden rounded mx-auto"
                style={{
                  height: "300px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 h-100 object-fit-contain"
                />
              </div>
              <span className="mt-3 fs-4">{formatName(product.name)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
