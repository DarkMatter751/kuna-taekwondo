import React from "react";
import tournament from "./Images/IMG_0019.JPG";
import ES from "./Images/EarlyStart.JPG";

function Bios() {
  return (
    <div className="Bios">
      <div class="grid-container">
        <div class="row align-items-center my-5">
        <div class="col-lg-6">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={ES} alt="" />
          </div>
          <div class="col-lg-6">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={tournament} alt="" />
          </div>
        </div>
        <div class="row align-items-left">
          <div class="grid item col-lg-6">
            <h1 class="font-weight-light">The Master</h1>
            <p>
              7th Degree, Chief Master Instructor Bob McClure began training in
              1988 under now Grand Master of the Intermountain Taekwondo
              Alliance Jay Hartwell in Twin Falls, Idaho. While attending Boise
              State University, he began instructing at Eagle Intermountain
              Martial Arts in 1993. He turned the school over to a local student
              who had earned his instructor certification, Mr Gary Peace, when
              his first child was born and moved to Kuna in 2004. A little over
              a year later, Master McClure started Kuna Taekwondo in 2005.
              Master McClure earned his Second Degree in the American Taekwondo
              Association in 1991, was promoted through the rank of 6th Degree,
              Senior Master Instructor in the Hwa-Rang Taekwondo Federation, and
              received his current rank in the Intermountain Taekwondo Alliance.
              Master McClure also enlisted in the Idaho Army National Guard in
              1988 and completed a 30-year career in 2018, retiring at the rank
              of Sergeant Major. He continues to serve the State of Idaho
              Military Division as a Security Operations Patrol Supervisor.
            </p>
          </div>
          <div class="grid item col-lg-5">
            <h1 class="font-weight-light">The Students</h1>
            <p>
              Students at Kuna Taekwondo have ranged in age from 5 to 60+ years
              of age. They have included boys, girls, men, and women from all
              walks of life with a variety of athletic ability/physical fitness
              levels when they joined. The one things they share is the
              combination of a desire to improve themselves with a willingness
              to give their best effort to achieve their goals. At Kuna
              Taekwondo, student are encouraged to progress at their own pace.
              Students are challenged to progress to move them out of their
              comfort zones, but always with the standard that the student
              determines when they are ready. Kuna Taekwondo is a family focused
              dojang. We have a number of sibling, parent-child, and other
              relation student pairs and have found that working and learning
              together has enhanced their relationships, both within and outside
              of the class. Almost all of our black belts have had a parent or
              sibling who trained with them during their journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bios;
