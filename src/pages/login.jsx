import { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <div className="login-container">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <div>

            <i className="fa-solid fa-shield-halved"></i>

            <h1>Welcome Back</h1>

            <p>
              Access your secure KYC account,
              manage customer verification,
              track compliance and monitor
              activities in real time.
            </p>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">

          <div className="login-card">

            <div className="logo">

              <h2>
                3DC <span>Finance</span>
              </h2>

              <p className="text-muted">
                Secure Login Portal
              </p>

            </div>

            <form>

              <div className="mb-3">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="mb-3 position-relative">

                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  required
                />

                <i
                  className={`fa-solid ${
                    showPassword
                      ? "fa-eye-slash"
                      : "fa-eye"
                  }`}
                  id="togglePassword"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                ></i>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <div>

                  <input type="checkbox" />

                  <label>
                    Remember Me
                  </label>

                </div>

              </div>

              <button
                type="submit"
                className="btn-login"
              >
                Login
              </button>

              <div className="links">

                <a href="#">
                  Forgot Password?
                </a>

                <a href="#">
                  Create Account
                </a>

              </div>

              <div className="signup">

                <p>
                  Don't have an account?

                  <a href="#">
                    Register Now
                  </a>

                </p>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;