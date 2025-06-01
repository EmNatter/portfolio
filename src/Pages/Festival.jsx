import { Link } from "react-router-dom";

const Festival = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div class="projectexample_card">
            <h1>Kommer mer snart</h1>

            <div className="button_center">
              <Link to="/">
                <button>Tillbaka</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Festival;
