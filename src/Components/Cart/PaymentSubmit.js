import React, { useState, useRef } from "react";
import "./PaymentSubmit.css";
import { paymentmethod, bankList } from "./PaymentMethodList";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

export default function PaymentSubmit({ SetPay }) {
  const ref = useRef();
  useOnClickOutside(ref, () => SetPay(false));
  const [PaymentInfo, setInfo] = useState({
    name: "",
    bankMethod: "",
    paymentMethod: "",
    Total: 0,
  });
  const handleChange = (eve) => {
    console.log(eve);
    setInfo({ ...PaymentInfo, [eve.target.name]: eve.target.value });
  };
  return (
    <div className="PaymentContainer" ref={ref}>
      <div className="PaymentClose">
        <button onClick={() => SetPay(false)}>
          <span>X</span>
        </button>
      </div>
      <form>
        <label for="name">Họ Và Tên :</label>
        <input
          type="text"
          id="name"
          value={PaymentInfo.name}
          onChange={handleChange}
          name="name"
          placeholder="Họ Và Tên: "
        />
        <label for="number">Số Điện Thoại :</label>
        <input
          type="text"
          id="number"
          value={PaymentInfo.number}
          onChange={handleChange}
          name="number"
          placeholder="Số Điện Thoại: "
        />
        <label for="bank">Chọn Ngân Hàng :</label>
        <select
          id="bank"
          name="bankMethod"
          value={PaymentInfo.bank}
          onChange={handleChange}
        >
          {bankList.map((Item, index) => {
            return (
              <option key={Item.value} value={Item.value}>
                {4 < index && index < bankList.length ? "Ngân Hàng " : ""}
                {Item.name}
              </option>
            );
          })}
        </select>
        <label for="chosePayment">
          Chọn Phương Thức Thanh Toán :
          <div className="chosePayment" id="chosePayment">
            {paymentmethod.map((Item) => {
              return (
                <label key={Item.name} className="paymentMethod">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={Item.name}
                    onChange={handleChange}
                  />
                  <img src={Item.img} alt={Item.img} />
                </label>
              );
            })}
          </div>
        </label>
        <div className="CartPayment">
          <button>Thanh Toán</button>
        </div>
      </form>
    </div>
  );
}
