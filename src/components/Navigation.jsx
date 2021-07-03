import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand bg-dark">
        <div class="container">
          <h3>Kuna Taekwondo</h3>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/info&history" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/info&history">
                  History
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/class-styles" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/class-styles">
                  Class Styles
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/day1" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/day1">
                  First Day
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/important-info" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/important-info">
                  Important Info
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/lowerrank-details" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/lowerrank-details">
                  Lower Ranks
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/upperrank-details" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/upperrank-details">
                  Upper Ranks
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/time&money-details"
                    ? "active"
                    : ""
                }`}
              >
                <Link class="nav-link" to="/time&money-details">
                  Class Times / Payment Options
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/bios" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/bios">
                  Bios
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/reviews" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/reviews">
                  Reviews
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/gallery" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
