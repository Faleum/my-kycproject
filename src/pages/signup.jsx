import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaShieldAlt,
  FaUserPlus,
} from "react-icons/fa";

import "./Signup.css";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successful!");
  };

  return (
    <div className="signup-container">

      {/* Floating Circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>

      <div className="signup-card">

        {/* Logo */}
        <div className="logo-section">
          <h1>
            <span className="blue">3DC</span>
            <span className="green"> Finance</span>
          </h1>


          <p className="welcome-text">
            Secure Client Registration Portal
          </p>
        </div>

        {/* Form Header */}
        <div className="form-header">
          <h2>Client Registration</h2>
          <p>
            Please fill in your details to create your account.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name </label>

            <div className="input-box">
              <FaUser className="icon" />

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>

            {errors.name && (
              <span className="error">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address </label>

            <div className="input-box">
              <FaEnvelope className="icon" />

              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            {errors.email && (
              <span className="error">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number </label>

            <div className="input-box">
              <FaPhone className="icon" />

              <input
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
            </div>

            {errors.phone && (
              <span className="error">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password </label>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type="password"
                placeholder="Create a strong password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>

            {errors.password && (
              <span className="error">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Role */}
          <div className="form-group">
            <label>Role</label>

            <div className="input-box">
              <FaShieldAlt className="icon" />

              <select
                {...register("role", {
                  required: "Role is required",
                })}
              >
                <option value="">Select your role</option>
                <option value="client">Client</option>
                <option value="agent">Agent</option>
              </select>
            </div>

            {errors.role && (
              <span className="error">
                {errors.role.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="submit-btn"
          >
            <FaUserPlus />
            Create Account
          </button>

        </form>

        <div className="login-link">
          Already have an account?
          <a href="#"> Login</a>
        </div>

      </div>
    </div>
  );
}

export default Signup;