import React from "react";
import { Link } from "react-router-dom";
import "../css/PasswordReset.css";

const PasswordResetPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Synergize
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src="/MEDIA/akshay logo.png" alt="Logo" className="logo1" />
          </div>
          <div className="col-md-8 d-flex justify-content-center align-items-center">
            <div className="login-container1">
              <h1>Welcome to Task Management</h1>
              <br />
              <form id="login-form">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputOldPassword1"
                    className="form-label"
                  >
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputOldPassword1"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputNewPassword1"
                    className="form-label"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputNewPassword1"
                    required
                  />
                </div>

                <button
                  type="reset"
                  className="btn btn-danger"
                  style={{
                    backgroundColor: "rgb(10, 82, 238)",
                    borderColor: "green",
                    color: "white",
                    width: "100%",
                    marginTop: "20px",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "rgb(233, 39, 8)")
                  }
                >
                  Reset
                </button>
              </form>
              <div id="message"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
