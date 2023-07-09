import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function Userlist() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Assignments</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Enrolled in:</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asilanom Rice Senday</td>
                    <td>
                      <Link to="/">BSCS</Link>
                    </td>
                    <td>
                      <button className="btn btn-primary">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Userlist;
