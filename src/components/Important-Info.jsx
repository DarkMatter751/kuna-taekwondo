import React from "react";

function Info() {
  return (
    <div className="importantInfo">
      <div class="container">
        <h1 class="font-weight-light">Important Info</h1>
        <div class="grid-container">
          <div class="row align-items-left">
            <div class="grid-item col-lg-6">
              <h5>The Tenets</h5>
              <p>
                Courtesy - Be kind, show good manners. <br />
                Integrity - Be honest in all that you say and do. <br />
                Perseverance - Keep trying and always give your best. <br />
                Self-Control - Do what is right, not just what is easy or fun.
                <br />
                Indomitable Spirit - Don't let others control what you feel,
                think, and (most importantly) do. <br />
              </p>
            </div>
            <div class="grid-item col-lg-5">
              <h5>The Oath</h5>
              <p>
                I shall observe the Tenets of Taekwondo. <br />
                I shall respect my instructor and seniors. <br />
                I shall never misuse Taekwondo. <br />
                I shall stand for freedom and justice. <br />
                I shall help build a more peaceful world. <br />
              </p>
            </div>
            <div class="grid-item col-lg-12">
              <h5>The Uniform/Belt</h5>
              <p>
                The uniform, call a dobok (dõ bôk) consists of a pair of draw
                string pants, jacket, and a belt. During summer months, we allow
                students to forgo the jacket and attend classes in a t-shirt
                with the pants and belt. All testings and organizational events
                (training camps, tournaments, etc.) are full uniform unless
                otherwise specified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
