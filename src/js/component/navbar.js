import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar  navbar-expand-lg navbar-light bg-light m-0">
				<Link to="/feed">
					<img className="mb-n4 mt-n43" id="logo" src={logo} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active ">
							<a className="nav-link" href="#">
								¿Cómo vender? <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								¿Cómo comprar? <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								¿Quiénes somos? <span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
