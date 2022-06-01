import "./styless.css";
import React from 'react'
import netflix from "../assets/netflix.webp"
import amazon from "../assets/amazon.webp"
import zee from "../assets/zee.jpg"
import { Link } from "react-router-dom";
function Cart() {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (
		<>
			{/* <div className="main_container">
				<nav className="navbar">
					<h1>fakebook</h1>
					<button className='white_btn' onClick={handleLogout}>
						Logout
					</button>
				</nav>
			</div> */}
			   <div className="d-sm-flex justify-content-between mb-3 sticky-top" style={{ padding: "20px" }}>
                            <h1 className="h3 mb-0" style={{ color: "white",fontFamily:"sans-serif" }}>All Plans</h1>
                            <Link className="nav-link collapsed " to="/" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-sign-out dark" style={{ color: "black",}}></i>
                                <span style={{ color: "black",}} onClick={handleLogout}>Logout</span>
                            </Link>
                        </div> 

			<section class="pricing py-1">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div class="card mt-3 mb-lg-0">
								<div class="card-body mt-4">
									<img className="netflix-img mx-3" style={{heigth: "10px",width:"350px"}} src={netflix}/>
									<h5 class="card-title text-muted text-uppercase text-center">Netflix</h5>
									<h6 class="card-price text-center">Rs.150<span class="period">/monthly</span></h6>
									<hr />
									<ul class="fa-ul">
										<li><span class="fa-li"><i class="fas fa-check"></i></span>Limited Offer <strong>Hurry !!</strong></li>
										<li><span class="fa-li"><i class="fas fa-check"></i></span>No. of Plans</li>
									</ul>
									<div class="d-grid">
										<Link to="/registerform" class="btn btn-primary text-uppercase">Subscribe</Link>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card mt-3 mb-lg-0">
								<div class="card-body mt-4">
								<img className="netflix-img mx-3 mb-0" style={{heigth: "70px",width:"350px"}} src={amazon}/>
									<h5 class="card-title text-muted text-uppercase text-center">Amazon Prime</h5>
									<h6 class="card-price text-center">Rs. 120<span class="period">/monthly</span></h6>
									<hr />
									<ul class="fa-ul">
										<li><span class="fa-li"><i class="fas fa-check"></i></span>Limited Offer <strong>Hurry !!</strong></li>
										<li><span class="fa-li"><i class="fas fa-check"></i></span>No. of plans</li>
									</ul>
									<div class="d-grid">
									<Link to="/registerform" class="btn btn-primary text-uppercase">Subscribe</Link>

									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card mt-3 mb-lg-0">
								<div class="card-body mt-4">
								<img className="netflix-img mx-3 mb-0" style={{heigth: "70px",width:"350px"}} src={zee}/>
									<h5 class="card-title text-muted text-uppercase text-center">Zee5</h5>
									<h6 class="card-price text-center">Rs. 130<span class="period">/monthly</span></h6>
									<hr />
									<ul class="fa-ul">
										<li><span class="fa-li"><i class="fas fa-check"></i></span>Limited Offer <strong>Hurry !!</strong></li>
										<li><span class="fa-li"><i class="fas fa-check"></i></span>No. of Plans</li>
									</ul>
									<div class="d-grid">
									<Link to="/registerform" class="btn btn-primary text-uppercase">Subscribe</Link>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);

}

export default Cart