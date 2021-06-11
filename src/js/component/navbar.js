import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/navbar.scss";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import logo2 from "../../img/logo2.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const logout = () => {
		actions.logout();
		history.push("/");
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light m-0">
				<Link to="/feed">
					<img className="img-fluid" id="logo" src={logo} />
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
							<Link className="nav-link" to="/comoVender">
								¿Cómo vender? <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/comoComprar">
								¿Cómo comprar? <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/quienesSomos">
								¿Quiénes somos? <span className="sr-only">(current)</span>
							</Link>
						</li>

						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							/>
							<div
								className="dropdown-menu dropdown-menu-right text-center"
								aria-labelledby="dropdownMenuButton">
								<li className="nav-item active">
									<Link className="nav-link" to="/perfilVendedor">
										Perfil Vendedor
										<span className="sr-only">(current)</span>
									</Link>
								</li>
								<li className="nav-item active">
									<Link className="nav-link" to="/publicar">
										Publicar <span className="sr-only">(current)</span>
									</Link>
								</li>
								<li className="nav-item active">
									<Link onClick={() => logout()} className="nav-link">
										Salir <i className="fas fa-sign-out-alt" />{" "}
										<span className="sr-only">(current)</span>
									</Link>
								</li>
							</div>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};
