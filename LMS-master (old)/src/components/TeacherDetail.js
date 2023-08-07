import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//Topics Tab

function TeacherDetail() {
  let { topic_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src="/logo192.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Chem Teacher 1</h3>
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
        <div className="card-header">Topics of this Teacher</div>
        <div className="list-group list-group-flush">
          <Link to="/" className="list-group-item list-group-item-action">
            Topic 1
          </Link>
          <Link to="/" className="list-group-item list-group-item-action">
            Topic 2
          </Link>
          <Link to="/" className="list-group-item list-group-item-action">
            Topic 3
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
