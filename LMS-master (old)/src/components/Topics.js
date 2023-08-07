import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//Topics Tab

function Topics() {
  let { topic_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src="/lablogo.jpg" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Topic Overview</h3>
          <p>
            Compilation of Topics for CPU Junior High School in Central
            Philippine University
          </p>
          <p className="fw-bold">
            Topics by: <Link to="/teacherdetail/1">Teacher 1</Link>
          </p>
        </div>
      </div>
      <div className="card" styles="width: 18rem;">
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Intro To Elements
            <span className="float-end">
              {" "}
              <button className="btn btn-sm btn-secondary float-right">
                Go
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Ways of Seprating Mixtures
            <span className="float-end">
              {" "}
              <button className="btn btn-sm btn-secondary float-right">
                Go
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Element of Compounds
            <span className="float-end">
              {" "}
              <button className="btn btn-sm btn-secondary float-right">
                Go
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Topic 4
            <span className="float-end">
              {" "}
              <button className="btn btn-sm btn-secondary float-right">
                Go
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Topic 5
            <span className="float-end">
              {" "}
              <button className="btn btn-sm btn-secondary float-right">
                Go
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topics;
