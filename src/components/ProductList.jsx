import ProductCard from "./ProductCard";

export default function ProductList() {
  const productList = [
    {
      name: "Sillon Exótico",
      description: "Muy detallado",
      stock: 4,
      price: 500.0,
      image:
        "https://media.roche-bobois.com/is/render/rocheboboisRender/bubble_mini_techno_fauteuil_pers_02?wid=1120&fmt=webp&resMode=sharp2&network=on&bfc=on&obj=Revp&color=224,205,28",
    },
    {
      name: "Sillon Exótico",
      description: "Muy detallado",
      stock: 4,
      price: 500.0,
      image:
        "https://media.roche-bobois.com/is/render/rocheboboisRender/bubble_mini_techno_fauteuil_pers_02?wid=1120&fmt=webp&resMode=sharp2&network=on&bfc=on&obj=Revp&color=224,205,28",
    },
    {
      name: "Sillon Exótico",
      description: "Muy detallado",
      stock: 4,
      price: 500.0,
      image:
        "https://media.roche-bobois.com/is/render/rocheboboisRender/bubble_mini_techno_fauteuil_pers_02?wid=1120&fmt=webp&resMode=sharp2&network=on&bfc=on&obj=Revp&color=224,205,28",
    },
  ];
  return (
    <div className="row">
      {productList.map((product) => (
        <div className="col-12 col-md-4" key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
