import React from "react";
import CBBelts from "./Images/CurrentBlackBelts.jpg";

function FirstDay() {
  return (
    <div className="day1">
      <div class="container">
        <h1 class="font-weight-light">What can I expect on the first day?</h1>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={CBBelts}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <p>
              On the first day, you should arrive about 5-10 minutes early. You
              will be greeted by the Master and the Instructor and given a brief
              description of the primary commands and class opening. You should
              be dressed in clothing that will allow you to move and stretch
              while maintaining modest attire. Shorts should be to the knee and
              tank tops are not allowed. Sweats with an appropriate t-shirt are
              suggested. Warm-ups will consist of a number of calisthenic
              exercises followed by 10-15 minutes of stretching. This will be
              followed by initial command and technique training, usually in
              stances, blocks, and punches. You should bring a water bottle for
              use during breaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstDay;
