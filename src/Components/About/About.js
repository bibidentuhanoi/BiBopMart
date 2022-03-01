import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="aboutGreet">
        <h1>
          Chào Mừng đến với <br />
          BiBop Mart
        </h1>
        <p>Thực Phẩm Sạch - An Toàn - Đảm Bảo</p>
        <p>Nơi mua sắm đáng tin cậy – Bạn của mọi nhà</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          className="svg--sm"
          fill="#f9f9f9"
          points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
        />
        <polygon
          className="svg--lg"
          fill="#f9f9f9"
          points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
        />
      </svg>
    </section>
  );
}
