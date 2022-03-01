import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import YourCart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [Cart, setCart] = useState([]);
  const [CartSum, setSum] = useState([]);
  const onAdd = (Product) => {
    const existItem = Cart.find((Item) => Item.ProductName === Product.name);
    if (existItem)
      setCart(
        Cart.map((Item) =>
          Item.ProductName === Product.name
            ? { ...existItem, qty: Item.qty + 1 }
            : Item
        )
      );
    else
      setCart([
        ...Cart,
        {
          ProductName: Product.name,
          Price: Product.price,
          Unit: Product.unit,
          img: Product.img,
          qty: 1,
        },
      ]);
  };
  const CartSummary = (Cart) => {
    // if (Cart.length === 0) return;
    const TotalNum = Cart.reduce(
      (Total, currentQty) => Total + currentQty.qty,
      0
    );
    const TotalPrice = Cart.reduce(
      (Total, currentPrice) =>
        Total + parseInt(currentPrice.Price) * currentPrice.qty,
      0
    );
    setSum({
      CartNum: TotalNum,
      CartTotal: TotalPrice,
    });
  };
  const RemoveFromCart = (ProductName) => {
    setCart(Cart.filter((Item) => Item.ProductName !== ProductName));
  };
  const onRemoveItem = (Product) => {
    const existItem = Cart.find((Item) => Item.ProductName === Product.name);

    if (existItem.qty === 1)
      setCart(Cart.filter((Item) => Item.ProductName !== Product.name));
    else
      setCart(
        Cart.map((Item) =>
          Item.ProductName === Product.name
            ? { ...existItem, qty: Item.qty - 1 }
            : Item
        )
      );
  };
  useEffect(() => {
    CartSummary(Cart);
  }, [Cart]);
  return (
    <Router>
      <NavBar CartSum={CartSum} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Products onAdd={onAdd} />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <YourCart
              Cart={Cart}
              CartSum={CartSum}
              onAdd={onAdd}
              onRemoveItem={onRemoveItem}
              RemoveFromCart={RemoveFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}
