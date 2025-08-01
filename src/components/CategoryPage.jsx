import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  console.log("Valor de id desde el Params:", categoryId);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        console.log("los productos traidos son:", response.data);
        const filtered = response.data.filter(
          (product) => product.categoryId === Number(categoryId)
        );
        setProducts(filtered);
        if (filtered.length > 0) {
          setCategoryName(filtered[0].category.name);
        } else {
          setCategoryName(
            "Sorry, we don’t have products listed under this category yet."
          );
        }
      })
      .catch((error) => console.error("Error fetcheando product", error));
  }, [categoryId]);

  if (!products.length) {
    return (
      <div className="text-center mt-5">
        Cargando productos...(ver de poner spinner)
      </div>
    );
  }
  function formatName(name) {
    return name
      .replace(/[0-9]/g, "")
      .replace(/_/g, " ")
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  return (
    <div className="container-fluid mt-5 pt-5">
      <h2 className="text-center mb-4">{formatName(categoryName)}</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-2 border rounded shadow text-center "
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2 rounded-top"
              style={{ height: "300px", objectFit: "contain" }}
            />
            <h5>{formatName(product.name)}</h5>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
