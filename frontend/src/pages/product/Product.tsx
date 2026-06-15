import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import { data } from "../../data";

const Product = () => {
  const [product, setProduct] = useState<any>(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  function findProduct() {
    const foundProduct = data.products.find((p) => p.id.toString() === id);

    setProduct(foundProduct);
  }

  useEffect(() => {
    findProduct();
  }, []);

  console.log(product);

  return (
    <div>
      <h4>
        {product?.categories[0]} - {product?.categories[1]}
      </h4>
      <p>{product?.newProducts && "New product"}</p>
      <img alt={`product ${id}`} src={product?.image} width="350px" />
      <h4>{product?.name}</h4>
      <p>{product?.description}</p>
      <p>{product?.mostSold && "Most Sold insigne"}</p>
      <h4>${product?.price}</h4>
      <button>share product</button>
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
    </div>
  );
};

export default Product;
