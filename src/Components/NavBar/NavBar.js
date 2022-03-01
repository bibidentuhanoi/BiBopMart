import React, { useEffect, useState } from "react";
import useHandleScroll from "../../Hooks/useHandleScroll";
import { BsCart2 } from "react-icons/bs";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
export default function NavBar({ CartSum }) {
  const [showMenu, setShow] = useState(false);
  const [changeMenu, setMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Cart") setMenu(true);
    else setMenu(false);
  }, [location]);
  useHandleScroll(() => {
    if (window.scrollY < 450 || window.scrollY === 0) setMenu(false);
    else setMenu(true);
  });
  return (
    <header className={changeMenu ? "showColor" : ""}>
      <nav>
        <div className="navBrand">
          <Link to="/">
            {" "}
            <h1>BiBop Mart</h1>
          </Link>
        </div>
        <a className="burggerBtn" onClick={() => setShow(!showMenu)}>
          <span className="burgger"></span>
          <span className="burgger"></span>
          <span className="burgger"></span>
        </a>
        <div className="navLinks" id={showMenu ? "" : "hidden"}>
          <ul>
            <li>
              <Link to="/">Trang Chủ</Link>
            </li>
            <li>
              <Link to="/">Sản Phẩm</Link>
            </li>
            <li>
              <Link to="/">Liên Lạc</Link>
            </li>
            <li style={{ overflow: "visible" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  overflow: "visible",
                }}
              >
                <Link to="/Cart" id="Cart">
                  <BsCart2 />
                  <span className="badge">
                    {CartSum.length === 0 ? 0 : CartSum.CartNum}
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
