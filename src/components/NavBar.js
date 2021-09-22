import React, { useEffect, useState } from "react";
import { Menu, Search } from "@mui/icons-material";
import { Button, IconButton, Paper } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../statics/logo.svg";
import "../theme/components/Navbar.css";

const NavBar = ({ isDashboard, isAuthenticated, isActive }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen == true) {
      setStyle("side-menu");
      setIsOpen(false);
    }
  }, [location]);
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState("side-menu");
  const handleMenu = () => {
    if (isOpen == false) {
      setStyle("side-nav");
      setIsOpen(true);
    }
    if (isOpen == true) {
      setStyle("side-menu");
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      <header className={isDashboard == true ? "kill-navbar" : ""}>
        <nav className="NavBar">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <form className="form">
            <input
              type="text"
              className="search-input"
              placeholder="Search anything"
            />
            <Search className="icon" />
          </form>
          {/* ANONYMOUSE USERS */}
          {!isAuthenticated ? (
            <ul className="navigations">
              <NavLink to="/" activeClassName="active-nav">
                Home
              </NavLink>
              <NavLink to="/board" activeClassName="active-nav">
                Leaders Board
              </NavLink>
              <NavLink to="/dashboard/home" activeClassName="active-nav">
                Dashboard
              </NavLink>
              <NavLink to="/signup" activeClassName="active-nav">
                Signup
              </NavLink>
              <Button
                variant="contained"
                size="large"
                href="/login"
                sx={{
                  background: "linear-gradient(to right, #7922F2, #AB15BF)",
                  marginRight: "1rem",
                }}
              >
                Login
              </Button>
            </ul>
          ) : (
            <ul className="navigations">
              <NavLink to="/" activeClassName="active-nav">
                Home
              </NavLink>
              <NavLink to="/board" activeClassName="active-nav">
                Leaders Board
              </NavLink>
              <NavLink to="/dashboard/home" activeClassName="active-nav">
                Dashboard
              </NavLink>
              <NavLink to="/profile" activeClassName="active-nav">
                Profile
              </NavLink>
              <Button
                variant="contained"
                size="large"
                href="/"
                sx={{
                  background: "linear-gradient(to right, #7922F2, #AB15BF)",
                  marginRight: "1rem",
                }}
              >
                Logout
              </Button>
            </ul>
          )}

          <div className={style}>
            <IconButton onClick={handleMenu}>
              <Menu />
            </IconButton>
            {isAuthenticated ? (
              <ul className="side-menu-list">
                <li
                  className={
                    isActive == "" || isActive == "/" ? "active-link" : ""
                  }
                >
                  <NavLink to="/">
                    <a>Home</a>
                  </NavLink>
                </li>
                <li className={isActive == "/board" ? "active-link" : ""}>
                  <NavLink to="/board">
                    <a>Leaders Board</a>
                  </NavLink>
                </li>
                <li className={isActive == "/board" ? "active-link" : ""}>
                  <NavLink to="/dashboard/home">
                    <a>Dashboard</a>
                  </NavLink>
                </li>
                <li className={isActive == "/profile" ? "active-link" : ""}>
                  <NavLink to="/profile">
                    <a>Profile</a>
                  </NavLink>
                </li>
                <NavLink to="/">
                  <li className="logout">
                    <a className="logout-btn">Logout</a>
                  </li>
                </NavLink>
              </ul>
            ) : (
              <ul className="side-menu-list">
                <li
                  className={
                    isActive == "" || isActive == "/" ? "active-link" : ""
                  }
                >
                  <NavLink to="/">
                    <a>Home</a>
                  </NavLink>
                </li>
                <li className={isActive == "/board" ? "active-link" : ""}>
                  <NavLink to="/board">
                    <a>Leaders Board</a>
                  </NavLink>
                </li>
                <li className={isActive == "/board" ? "active-link" : ""}>
                  <NavLink to="/dashboard/home">
                    <a>Dashboard</a>
                  </NavLink>
                </li>
                <li className={isActive == "/profile" ? "active-link" : ""}>
                  <NavLink to="/signup">
                    <a>Signup</a>
                  </NavLink>
                </li>
                <NavLink to="/login">
                  <li className="logout">
                    <a className="logout-btn">Login</a>
                  </li>
                </NavLink>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
