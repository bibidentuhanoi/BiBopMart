import React from "react";
import "./Productcard.css";

export default function ProductCard({ name, price, unit, img, onAdd }) {
  return (
    <div className="productCard" data-name={name.split(" ")[0]}>
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="productDetail">
        <h3 className="productTitle">{name}</h3>
        <div className="productPrice">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ/{unit}
        </div>
        <div className="buybtn">
          <button onClick={() => onAdd({ name, price, img, unit })}>
            Thêm Vào Giỏ
          </button>
        </div>
      </div>
    </div>
  );
}
