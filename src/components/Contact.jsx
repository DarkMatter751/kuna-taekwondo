import React from "react";
import TKDMap from "./Images/TKD-Location.PNG";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <h1 class="font-weight-light">Location</h1>
            <h5>Address: 763 W Avalon St, Kuna, ID 83634</h5>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={TKDMap}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              <ul> Phone: 208-922-2286</ul>
              <ul>
                Facebook Page:{" "}
                <a href="https://www.facebook.com/KunaTaekwondo/about">
                  Kuna Taekwondo
                </a>
              </ul>
              <ul>Email: mckickerfamily@gmail.com</ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
