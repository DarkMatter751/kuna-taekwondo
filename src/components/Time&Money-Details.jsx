import React from "react";

function TP() {
  return (
    <div className="timeMoney">
      <div class="grid-container">
        <h1 class="font-weight-light">When can I go and what will it cost?</h1>
        <div class="row align-items-center my-5">
          <div class=" grid-item col-lg-6">
            <h5>Class Times / Days </h5>
            <p>
              6:00 PM Monday/Thursday @ 763 W. Avalon Kuna, ID <br />
              Located in Kuna Kave Kids.
            </p>
            </div>
            <div class=" grid-item col-lg-5">
            <h5>Payment Plans and Pricing </h5>
            <p>
              Monthly - $50 <br />
              Military rate - $40 / Month for the first person
              <br />
              Family Rate - $25 / Month for each after first student <br />
              Yearly Fee - $10 <br />
            </p>
            </div>
            <div class=" grid-item col-lg-6">
            <h5>Clothing and Gear</h5>
            <p>
              Uniform - $25 <br />
              Sparring Gear for Green Belt and up - $85 <br />
            </p>
            </div>
            <div class=" grid-item col-lg-5">
            <h5>Testing Fees</h5>
            <p>
              White to Green - $35 <br />
              Purple to Red-Black - $60 <br />
              Black Belt - $150
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TP;
