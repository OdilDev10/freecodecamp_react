import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav
        style={{
          width: "100%",
          height: "80px",
          background: "#5bc276",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <a href="" style={{ textDecoration: "none", color: "#fff" }}>
            <img
              src="https://odilmartinez.com/img/programacion.png"
              alt="logo"
              height={50}
              width={60}
            />
            <i style={{ fontSize: "27px", fontWeight: "700" }}>Odil martinez</i>
          </a>
        </div>
        <div style={{ width: "50%" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
              fontSize: "23px",
            }}
          >
            <li>
              <Link to={"/freecodecamp_react"} style={{ textDecoration: "none", color: "#fff" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/freecodecamp_react/quote_machine"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Quote Machine
              </Link>
            </li>
            <li>
              <Link
                to={"/freecodecamp_react/markdown_editor"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Markdown Editor
              </Link>
            </li>
            <li>
              <Link
                to={"/freecodecamp_react/drum_machine"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Drum Machine
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      <div>{<Outlet />}</div>
      <footer style={{ height: "300px", background: "#32543b" }}>
        <img
          src="https://odilmartinez.com/img/python-negro.png"
          alt="Python"
          height={50}
          width={50}
        />
      </footer>
    </div>
  );
};
