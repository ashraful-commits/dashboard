import { Link } from "react-router-dom";
import registerPhoto from "../../assets/img/logo-white.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RegisterUser } from "../../features/auth/authApiSlice";

import { Toastify } from "../../helper/Toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    c_pass: "",
  });
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.Auth);
  const handleuserRegister = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.password || !input.c_pass) {
      Toastify("All fields are required!", "warning");
    } else {
      if (input.password !== input.c_pass) {
        Toastify("Password not match!", "warning");
      } else {
        dispatch(
          RegisterUser({
            name: input.name,
            email: input.email,
            password: input.password,
          })
        );

        setInput({
          name: "",
          email: "",
          password: "",
          c_pass: "",
        });
      }
    }
  };
  useEffect(() => {
    if (error) {
      Toastify(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message) {
      Toastify(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message]);
  return (
    <>
      <div className="main-wrapper login-body">

        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={registerPhoto} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleuserRegister}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        onChange={handleInput}
                        value={input.name}
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={handleInput}
                        value={input.email}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={handleInput}
                        value={input.password}
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        onChange={handleInput}
                        value={input.c_pass}
                        name="c_pass"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div className="social-login">
                    <span>Register with</span>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google"></i>
                    </a>
                  </div>
                  {/* <!-- /Social Login --> */}

                  <div className="text-center dont-have">
                    Already have an account? <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
