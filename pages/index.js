import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        class="border border-2 rounded-3 p-5 text-bg-light mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        <div class="mx-auto" style={{ maxWidth: "800px" }}>
          <div class="hstack gap-3 my-0">
            <img
              src="images/profile.jpg"
              width="180"
              height="180"
              style={{ object: "cover" }}
              class="rounded-circle"
            />
            <span class="vstack my-auto">
              <span class="fw-bold fs-4">Pubet Choompusueb</span>
              <span>
                Hi, my name is Pubet Choompusueb. I graduated from high school
                at Bunyawatwittayalai school.
              </span>
            </span>
          </div>
          <div class="fw-bold text-center fs-5">My Skills</div>
          <br />
          <div class="hstack gap-3">
            <div class="card" style={{ width: "18rem", height: "350px" }}>
              <img
                src="images/programming.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="text-center card-title">Programming</h5>
                <p class="card-text">I love coding.</p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", height: "350px" }}>
              <img src="images/basketball.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="text-center card-title">Basketball</h5>
                <p class="card-text">
                  I like to play basketball. In high school, I played basketball
                  with my friends.
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", height: "350px" }}>
              <img src="images/guitar.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="text-center card-title">Guitar</h5>
                <p class="card-text">
                  I used to practice playing guitar in high school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
