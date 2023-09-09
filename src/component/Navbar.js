import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-dark ">
        <div className="container-fluid">
          <div>
            <span className="navbar-toggler-icon "></span>

            <span className="text-light ms-3">
              <Link to="/home">TRAVEL APP</Link>
            </span>
          </div>
          <div>
            <Link to="/add" className="btn-add text-dark">
              <button className="btn btn-light btn-sm px-3">ADD</button>
            </Link>
            <button
              className="btn btn-danger btn-sm px-3 ms-3"
              onClick={handleLogout}
            >
              LOG OUT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
