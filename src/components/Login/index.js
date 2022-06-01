import "./styles.css";
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://recbots-tasks.herokuapp.com/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/dashboard";
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }
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
                                    <h1 style={{ textAlign: "center" }} class="login-heading">Login</h1>

                                    {/* Form Validation */}
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                            {/* <label class="mb-2 text-muted">E-Mail Address</label> */}
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
                                            {/* <div class="mb-2 w-100">
                                                <label class="text-muted">Password</label>

                                            </div> */}
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                                value={data.password}
                                                required
                                                class="input_edit form-control"
                                            />
                                            
                                            <div class="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <div class="form-check">
                                                {/* <input type="checkbox" name="remember" id="remember" class="form-check-input" /> */}
                                                {/* <label for="remember" class="form-check-label">Remember Me</label> */}
                                            </div>
                                            {
                                                error && <div className="error_msg">{error}</div>
                                            }
                                            <button type="submit" class="btn btn-primary ms-auto">
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div class="card-footer py-3 border-0">
                                    <div class="text-center">
                                        Don't have an account?  <Link to={"/signup"}><a class="signup_btn create-btn">Sign Up</a></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* <div className="login_container">
                <div className="login_form_container">
                    <div className="left">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1>Login to Your Account</h1>
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
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div className="right">
                        <h1>New Here</h1>
                        <Link to="/signup">
                            <button type="button" className="white_btn">
                                Sign Up
                            </button>
                        </Link>

                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Login;