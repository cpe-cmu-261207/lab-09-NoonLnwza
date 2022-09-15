import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />
      <div
        class="border border-2 rounded-3 p-5 text-bg-light mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        <div class="fw-bold text-center fs-3">Contact Me</div>
        <br />

        <div class="mx-auto" style={{ maxWidth: "800px" }}>
          <div class="hstack gap-3 my-0">
            <div>
              <img
                src="images/profile.jpg"
                width="250"
                height="250"
                style={{ object: "cover" }}
                class="rounded-circle"
              />
            </div>

            <div class="hstack my-auto">
              <div class="vstack fw-bold pe-xxl-5">
                <span>Name</span>
                <span>Nickname</span>
                <span>Adress</span>
                <br />
                <span>Facebook</span>
                <span>Phone</span>
              </div>
              <div class="vstack ps-5">
                <span>Pubet Choompusueb</span>
                <span>Kanoon</span>
                <span>329 Moo1 Tambon Sala Amphoe KohKha Changwat Lampang</span>
                <span>
                  <a
                    href="https://www.facebook.com/pubet.kn "
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/pubet.kn
                  </a>
                </span>

                <span>0971419554</span>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
