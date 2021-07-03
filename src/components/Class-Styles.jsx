import React from "react";

function ClassStyle() {
  return (
    <div className="class-styles">
      <div class="grid-container">
         <h1 class="font-weight-light">What can I learn?</h1>
        <div class="row align-items-left my-5">
          <div class="grid item col-lg-6">
           
            <h5>Forms</h5>
            <p>
              Forms are used to teach students how to put techniques together in
              ways that allow them to maintain their balance while utilizing the
              techniques with power and fluidity.
            </p>

            <h5>One-Steps</h5>
            <p>
              One steps are the beginning of a student's sparring experience.
              Students pair up and practice a choreographed reaction to a single
              attack (1-step). This begins to teach the students how to adjust
              stance, timing, and targeting for another individual.
            </p>

            <h5>Sparring</h5>
            <p>
              Sparring allows the student to utilize the techniques in a more
              free-form environment, finding which techniques are best suited to
              their personality, flexibility, and physical attributes. New
              sparers are normally matched with experienced (black belt)
              students to allow them to learn control, movement, and defense in
              a safe environment. Kuna TKD uses light contact rules and safety
              equipment (chops, kicks, headgear, mouthpiece, and cup) for point
              sparring matches.
            </p>
            </div>
            <div class="grid item col-lg-6">
            <h5>Board Breaks</h5>
            <p>
              Board breaking allows students to perceive the power of the
              techniques that they have been taught. It also introduces them to
              the advantages of shifting their body weight to increase that
              power. Students begin breaking boards at testings for blue belt,
              but will begin training for it when they show sufficient skill in
              their sparring.
            </p>

            <h5>Weapons</h5>
            <p>
              Ask any five-year-old what they want to do at "karate class" and
              the answer will doubtless include swords, nunchucks, staves, or a
              mixture of those and more. At Kuna TKD, training in weapons is
              available for students at Purple belt if they have shown
              sufficient progress in all other areas of training.
            </p>
          </div>
          {/* <div class="col-lg-5">
            <h1 class="font-weight-light">What are the age groups?</h1>
            <h5>Young</h5>
            <p>--Insert Text Here--</p>

            <h5>Teens</h5>
            <p>--Insert Text Here--</p>

            <h5>Adults</h5>
            <p>--Insert Text Here--</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ClassStyle;
