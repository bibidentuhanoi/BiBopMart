import React from "react";
import "./Cart.css";
import CartEmpty from "./cartEmpty";

export default function YourCart({
  Cart,
  CartSum,
  onAdd,
  onRemoveItem,
  RemoveFromCart,
}) {
  return (
    <section className="Cart">
      {Cart.length !== 0 ? (
        <>
          <h1>Giỏ Hàng</h1>
          <div className="YourCart">
            {Cart.map((Item) => {
              return (
                <div key={Item.ProductName} className="CartItem">
                  <div className="cartImg">
                    {" "}
                    <img src={Item.img} alt={Item.ProductName} />
                  </div>
                  <div className="itemInfo">
                    {" "}
                    <h3>{Item.ProductName}</h3>
                    <span>{Item.Unit.slice("/")}</span>
                  </div>
                  <div className="itemQtyContainer">
                    <h2>Số Lượng</h2>
                    <div className="itemQty">
                      {" "}
                      <button
                        id="decrement"
                        onClick={() => onRemoveItem({ name: Item.ProductName })}
                      >
                        -
                      </button>
                      <h3>{Item.qty}</h3>
                      <button
                        id="increment"
                        onClick={() => onAdd({ name: Item.ProductName })}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="itemPrice">
                    <h2>
                      {Item.Price.toString().replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        "."
                      )}{" "}
                      đ
                    </h2>
                    <span onClick={() => RemoveFromCart(Item.ProductName)}>
                      Bỏ Khỏi Giỏ Hàng
                    </span>
                    <button>Thanh Toán</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="CartSummary">
            <div className="CartSumInfo">
              <p>
                <span>Tổng Sản Phẩm:</span>
                <span>&nbsp;{CartSum.CartNum}</span>
              </p>
              <p>
                <span>Tổng Thanh Toán :</span>
                <span>
                  &nbsp;
                  {CartSum.CartTotal.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    "."
                  )}
                  &nbsp;đ
                </span>
              </p>
            </div>
            <div className="CartPayment">
              <button>Thanh Toán</button>
            </div>
          </div>
        </>
      ) : (
        <div className="CartEmpty">
          <div className="cartEm">
            {" "}
            <CartEmpty />
          </div>
          <h1>Giỏ Hàng Đang Trống</h1>
        </div>
      )}
    </section>
  );
}
