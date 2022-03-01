import React from "react";
import "./Products.css";
import ProductCard from "./Productcard/ProductCard";
import { freshProduct, cashewS, RawcashewS } from "./ProductsList";
export default function Products({ onAdd }) {
  return (
    <section className="products">
      {" "}
      <h1>Các Mặt Hàng Chúng Tôi Có</h1>
      <h2>Các Mặt Hàng Tươi:</h2>
      <div className="MyProducts">
        {freshProduct.map((product) => {
          const { name, price, unit, img } = product;
          return (
            <ProductCard
              key={name}
              name={name}
              price={price}
              unit={unit}
              img={img}
              onAdd={onAdd}
            />
          );
        })}
      </div>
      <h2>Các Loại Hạt Điều:</h2>
      <div className="MyProducts">
        {cashewS.map((product) => {
          const { name, price, unit, img } = product;
          return (
            <ProductCard
              key={name}
              name={`Điều (${name})`}
              price={price}
              unit={unit}
              img={img}
              onAdd={onAdd}
            />
          );
        })}
        {RawcashewS.map((product) => {
          const { name, price, unit, img } = product;
          return (
            <ProductCard
              key={name}
              name={`Điều Sống(${name})`}
              price={price}
              unit={unit}
              img={img}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </section>
  );
}
