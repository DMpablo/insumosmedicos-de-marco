import { ProductCard } from "../product/productCard";

export const List = (props) =>
  props.productLista.map((product) => (
    <ProductCard
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image}
      stock={product.stock}
    />
  ));
