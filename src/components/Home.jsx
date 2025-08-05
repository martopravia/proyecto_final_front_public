import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { formatName } from "../utils/formatName";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("fetching error", error));
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }
  const getFirstProductByCategory = (categoryId) =>
    products.find((product) => product.categoryId === categoryId);

  const sofas = getFirstProductByCategory(1);
  const tables = getFirstProductByCategory(2);
  const chairs = getFirstProductByCategory(3);

  const handleClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const randomProducts = products
    .filter((product) => product.featured === true)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <div className="my-5">
      <h1 className="text-center my-5">Choose your signature piece</h1>

      <div className="row m-5">
        <div
          className="col-12 col-md-6 col-xl-4 mb-4 mt-5 d-flex flex-column justify-content-end align-items-center text-center"
          onClick={() => handleClick("sofas")}
        >
          <img
            src={sofas?.image || "src/img/sillon nordico.png"}
            className="img-fluid img-home interactive"
            alt="Sofa image"
          />
          <h4 className="mt-5  ">Heritage Sofas</h4>
        </div>
        <div
          className="col-12 col-md-6 col-xl-4  mb-4 mt-5 d-flex flex-column justify-content-end align-items-center text-center"
          onClick={() => handleClick("chairs")}
        >
          <img
            src={chairs?.image || "src/img/sillon nordico.png"}
            className="img-fluid img-home interactive"
            alt="Chair image"
          />
          <h4 className="mt-5 ">Refined Seating</h4>
        </div>
        <div
          className="col-12 col-md-6 col-xl-4  mb-4 mt-5 d-flex flex-column justify-content-end align-items-center text-center"
          onClick={() => handleClick("tables")}
        >
          <img
            src={tables?.image || "src/img/sillon nordico.png"}
            className="img-fluid img-home interactive"
            alt="Table image"
          />
          <h4 className="mt-5 ">Artisan Tables</h4>
        </div>
      </div>
      <hr />
      <h2 className="text-center my-5">
        Curated designs for distinguished spaces
      </h2>
      <div className="row m-4">
        <div className="scroll-container px-4 d-flex overflow-x-auto overflow-y-hidden gap-5 pb-5">
          {randomProducts.map((product) => (
            <div
              key={product.id}
              className="scroll-item interactive text-center col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column justify-content-end align-items-center text-center"
              style={{
                maxWidth: "300px",
              }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div
                className="scroll-image-card w-100 overflow-y-hidden rounded mx-auto"
                style={{
                  height: "500px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 h-100 object-fit-contain d-block image-test"
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
