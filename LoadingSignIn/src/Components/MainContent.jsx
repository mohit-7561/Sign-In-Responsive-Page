import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "./MainContent.css";

const MainContent = () => (
  <div className="main-content text-center">
    <h1>
      Explore your <span className="text-primary">hobby</span> or{" "}
      <span className="text-secondary">passion</span>
    </h1>
    <p>
      Sign-in to interact with a community of fellow hobbyists and an eco-system
      of experts, teachers, suppliers, classes, workshops, and places to
      practice, participate or perform.
    </p>
    <div className="login-form">
      <div className="d-flex justify-content-center">
        <Button variant="light" className="me-2">
          Sign In
        </Button>
        <Button className="custom-join-in-btn">Join In</Button>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Email"
        />
        <label for="password" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary continue-btn" type="button">
          Continue
        </button>
      </div>

      <p className="mt-3">Or connect with</p>
      <Button
        variant="light"
        className="w-100 mt-2 d-flex align-items-center justify-content-center google"
      >
        <FontAwesomeIcon icon={faGoogle} className="social-icon google-icon" />
        <span className="ms-2">Continue with Google</span>
      </Button>
      <Button
        variant="light"
        className="w-100 mt-2 d-flex align-items-center justify-content-center facebook"
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          className="social-icon facebook-icon"
        />
        <span className="ms-2">Continue with Facebook</span>
      </Button>
    </div>
  </div>
);

export default MainContent;
