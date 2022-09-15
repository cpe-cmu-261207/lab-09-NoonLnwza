import React from "react";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div>
      <Navbar />
      <div
        class="border border-2 rounded-3 p-5 text-bg-light mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        <div class="mx-auto" style={{ maxWidth: "600px" }}>
          <div class="fw-bold text-center fs-3">Experience</div>
          <br />
          <div>
            <div class="card mb-3" style={{ maxWidth: "700px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="images/scratch.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Scratch Project</h5>
                    <p class="card-text">
                      I learn and used scratch on first semestry. It's the
                      beginning of my coding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: "700px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="images/cpp.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">C++ Project</h5>
                    <p class="card-text">
                      I learn c++ on second semestry and I use c++ for my
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
