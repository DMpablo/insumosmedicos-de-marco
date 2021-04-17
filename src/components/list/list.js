import { ProductCard } from "../product/ProductCard"

export const List = (props) => props.productList.map((product) => (
    <ProductCard
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image}
    />
  ));

