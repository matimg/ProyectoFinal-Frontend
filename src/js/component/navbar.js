import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Logo</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn border-0 btn-sm">¿Cómo vender?</button>
				</Link>
				<Link to="/demo">
					<button className="btn border-0 btn-sm">¿Cómo comprar?</button>
				</Link>
				<Link to="/demo">
					<button className="btn border-0 btn-sm">¿Quienes somos?</button>
				</Link>
			</div>
		</nav>
	);
};
