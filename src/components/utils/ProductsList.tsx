import React from "react";

interface Props {
  products: ProductTypes[];
  style: string;
  Item: any;
  list?: boolean;
}
export default function ProductsList({ Item, products, style, list }: Props) {
  return (
    <div className={`${list ? "block" : "flex  flex-wrap"}`}>
      {products.map((item) => (
        <div key={item.id} className={style}>
          <Item product={item} />
        </div>
      ))}
    </div>
  );
}
