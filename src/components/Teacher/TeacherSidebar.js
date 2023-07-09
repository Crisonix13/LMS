import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="card">
      <Link
        to="/teacherdashboard"
        className="list-group-item list-group-item-action"
      >
        Dashboard
      </Link>
      <div className="list-group list-group-flush">
        <Link
          to="/teachertopics"
          className="list-group-item list-group-item-action"
        >
          Topics
        </Link>
        <Link
          to="/teacherquizzes"
          className="list-group-item list-group-item-action"
        >
          Assignments
        </Link>
        <Link
          to="/teacherstudents"
          className="list-group-item list-group-item-action"
        >
          My Students
        </Link>
        <Link
          to="/teacherlabsimulations"
          className="list-group-item list-group-item-action"
        >
          Lab Simulations
        </Link>
        <Link
          to="/teacherprofile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </Link>
        <Link
          to="/teacherchangepassword"
          className="list-group-item list-group-item-action"
        >
          Change Password
        </Link>
        <Link
          to="/teacherLogin"
          className="list-group-item list-group-item-action text-danger"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
