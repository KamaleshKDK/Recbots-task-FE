import "./style.css";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
        
    })
    const [error, setError] = useState("")
    
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3001/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/")
            console.log(res.message)
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
    return (
        <>
            <section class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-sm-center h-100">
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div class="text-center my-5">
                            </div>
                            <div class="card shadow-lg">
                                <div class="card-body p-5">
                                    <h1 style={{ textAlign: "center" }} class="register-heading">Register</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                            {/* <label class="mb-2 text-muted">First Name</label> */}
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                name="firstName"
                                                onChange={handleChange}
                                                value={data.firstName}
                                                required
                                                class="input_edit form-control"
                                            />

                                            <div class="invalid-feedback">
                                                Name is required
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            {/* <label class="mb-2 text-muted">Last Name</label> */}
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                name="lastName"
                                                onChange={handleChange}
                                                value={data.lastName}
                                                required
                                                class="input_edit form-control"
                                            />
                                            <div class="invalid-feedback">
                                                Name is required
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            {/* <label class="mb-2 text-muted" for="email">E-Mail Address</label> */}
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                onChange={handleChange}
                                                value={data.email}
                                                required
                                                class="input_edit form-control"
                                            />
                                            <div class="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            {/* <label class="mb-2 text-muted" for="password">Password</label> */}
                                            <input
                                                type={passwordShown ? "text" : "password"}
                                                placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                                value={data.password}
                                                required
                                                class="input_edit form-control"
                                            />
                                              {/* <span className="pw_eye-btn p-viewer"> */}
                                                {/* <i onClick={togglePassword} class="eye_btn fa fa-eye" aria-hidden="true"></i> */}
                                            {/* </span> */}
                                            <div class="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        {
                                            error && <div className="error_msg">{error}</div>
                                        }
                                        <div class="align-items-center d-flex">
                                            <button Link to={"/login"} type="submit" class="register_btn btn btn-primary ms-auto">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer py-3 border-0">
                                    <div class="text-center" >
                                        Already have an account? <Link to={"/"}><a class="login_btn login-btn">Login</a></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



{/* 
            <div className="signup_container">
                <div className="signup_form_container">
                    <div className="left">
                        <h1>Welcome Back</h1>
                        <Link to="/login">
                            <button type="button" className="white_btn">
                                Sign in
                            </button>
                        </Link>
                    </div>
                    <div className="right">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={handleChange}
                                value={data.firstName}
                                required
                                className="input"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                value={data.lastName}
                                required
                                className="input"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className="input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className="input"
                            />
                            {
                                error && <div className="error_msg">{error}</div>
                            }
                            <button type="submit" className="green_btn">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}

        </>
    )
}
export default Signup;