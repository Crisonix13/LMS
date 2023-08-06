import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Computer Aided Learning
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Topics <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Quizzes
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Register">
                  Register
                </Link>
              </li>
              <div className="dropdown-divider"></div>
              <li>
                <Link className="dropdown-item" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Teacher
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/teacherlogin">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/teacherregister">
                  Register
                </Link>
              </li>
              <div className="dropdown-divider"></div>
              <li>
                <Link className="dropdown-item" to="/teacherdashboard">
                  Dashboard
                </Link>
              </li>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              About Us
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search "
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
