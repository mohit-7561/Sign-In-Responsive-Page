import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{
      backgroundColor: "#e3f2fd",
      boxShadow: "0px 6px 8px -6px rgba(0, 0, 0, 0.4)",
    }}
  >
    <div className="container">
      <a className="navbar-brand" href="#home">
        <span className="ms-2 text-primary">hobby</span>
        <span style={{ color: "#8064A2" }}>cue</span>
        <div
          style={{
            color: "gray",
            fontSize: 11,
            position: "relative",
            left: 8,
          }}
        >
          Your Hobby, Your Community
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#search" aria-label="Search">
              <i className="bi bi-search" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#notifications"
              aria-label="Notifications"
            >
              <i className="bi bi-bell" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu" aria-label="Menu">
              <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
