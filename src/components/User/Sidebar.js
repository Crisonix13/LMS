import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="card">
      <Link
        to="/user-dashboard"
        className="list-group-item list-group-item-action"
      >
        Dashboard
      </Link>
      <div className="list-group list-group-flush">
        <Link to="/topics" className="list-group-item list-group-item-action">
          Topics
        </Link>
        <Link to="/quizzes" className="list-group-item list-group-item-action">
          Assignments
        </Link>
        <Link
          to="/labsimulations"
          className="list-group-item list-group-item-action"
        >
          Lab Simulations
        </Link>
        <Link to="/profile" className="list-group-item list-group-item-action">
          Profile
        </Link>
        <Link
          to="/changepassword"
          className="list-group-item list-group-item-action"
        >
          Change Password
        </Link>
        <Link
          to="/Login"
          className="list-group-item list-group-item-action text-danger"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
