import React from "react";
import group1 from "./Images/group 1.JPG";

function IH() {
  return (
    <div className="In">
      <div class="container">
        <div class="col align-items-center my-5">
          <div class="row-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={group1}
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="row align-items-left">
          <div class="grid-item col-lg-6">
            <h1 class="font-weight-light">What is Taekwondo?</h1>
            <p>
              Taekwondo is a Korean martial art that literally translates as
              "The way of Hand and Foot." Taekwondo, in its modern form, is a
              relatively new art. General Choi Hong Li brought together the
              styles of many Korean martial arts and Japanese karate under the
              name Taekwondo in 1955. However, the roots of those martial arts
              reach back more than a millennium. More important than the
              individual techniques used, the philosophy behind the art of
              taekwondo are more than 1500 years old and have helped define the
              Korean society and people. The ideals of courtesy, honesty,
              self-confidence, and duty to one's family and country truly define
              what taekwondo is really about, and form the framework for why one
              studies taekwondo.
            </p>
          </div>
          <div class="grid-item col-lg-5">
            <h1 class="font-weight-light">So who are we?</h1>
            <p>
              Kuna TKD is a family-focused, traditional taekwondo dojang
              (school). Founded in 2005, we have been honored to serve the Kuna
              area for the last 16 years. Kuna TKD is a member of the
              Intermountain Taekwondo Alliance (ITA) under Grand Master Jay
              Hartwell. We advocate self assurance, discipline, and physical
              fitness while teach traditional martial arts to students of all
              ages, 5-60+.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IH;
