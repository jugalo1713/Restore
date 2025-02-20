import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7002/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addproduct = () => {
    setProducts((x) => [
      ...x,
      { name: "Product " + (x.length + 1), price: (x.length + 1) * 100 },
    ]);
  };

  return (
    <div>
      <h1>Re-Store</h1>
      <Catalog products={products}  addProduct={addproduct} />
    </div>
  );
}

export default App;
