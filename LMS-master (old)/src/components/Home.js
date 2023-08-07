import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      <h3 className="pb-1 mb-2">Topic</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1">
              <img src="lablogo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">
                  <a href="#">Topics</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Quizzes</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Simulations</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
