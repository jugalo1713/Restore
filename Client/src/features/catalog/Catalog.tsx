import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add</button>
    </>
  );
};
export default Catalog;
