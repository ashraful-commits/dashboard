import { Link, useNavigate } from "react-router-dom";
import loginPhoto from "../../assets/img/logo-white.png";
import { useEffect, useState } from "react";
import { Toastify } from "../../helper/Toastify";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../features/auth/authApiSlice";
import { setMessageEmpty } from "../../features/auth/authSlice";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //======================
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { error, message, user } = useSelector((state) => state.Auth);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      Toastify("All fields are required!", "warning");
    } else {
     
      dispatch(LoginUser(input));
      setInput({
     
        email: "",
        password: "",

      });
    }
  };
  useEffect(() => {
    if(error){
      Toastify(error, "error");
      dispatch(setMessageEmpty());
    }
    if(message){
      Toastify(message, "success");
      dispatch(setMessageEmpty());
    }
    
    if(user){
     navigate('/')
    }
  }, [error, message,user,dispatch,navigate]);
  return (
    <>
      <div className="main-wrapper login-body">
     
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={loginPhoto} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        onChange={handleInput}
                        name="email"
                        value={input.email}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={handleInput}
                        name="password"
                        value={input.password}
                        className="form-control"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="text-center forgotpass">
                    <Link to="/forget">Forgot Password?</Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div className="social-login">
                    <span>Login with</span>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google"></i>
                    </a>
                  </div>
                  {/* <!-- /Social Login --> */}

                  <div className="text-center dont-have">
                    Don’t have an account? <Link to="/register">Register</Link>
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

export default Login;
