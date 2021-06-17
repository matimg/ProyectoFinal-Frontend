import React, { useContext, useEffect, useState } from "react";
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

	const [rolComprador, setRolComprador] = useState("d-none");
	const [rolVendedor, setRolVendedor] = useState("d-none");
	const [cualquierRol, setCualquierRol] = useState("d-none");
	const [sinRol, setSinRol] = useState("");

	useEffect(
		() => {
			if (store.tipoUsuario === "Comprador" && store.token) {
				setRolComprador("");
				setRolVendedor("d-none");
				setCualquierRol("");
				setSinRol("d-none");
			} else if (store.tipoUsuario === "Vendedor" && store.token) {
				setRolComprador("d-none");
				setRolVendedor("");
				setCualquierRol("");
				setSinRol("d-none");
			} else {
				setRolComprador("d-none");
				setRolVendedor("d-none");
				setCualquierRol("d-none");
				setSinRol("");
			}
		},
		[store.tipoUsuario, store.token]
	);
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light m-0">
				<Link to="/">
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
							<Link id="botonNav" className={"nav-link " + sinRol} to="/comoVender">
								¿Cómo vender? <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="botonNav" className={"nav-link " + sinRol} to="/comoComprar">
								¿Cómo comprar? <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="botonNav" className={"nav-link " + sinRol} to="/quienesSomos">
								¿Quiénes somos? <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnIngresar" className={"nav-link " + sinRol} to="/inicioSesion">
								<i className="fas fa-sign-in-alt" />
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnPublicaciones" className={"nav-link " + cualquierRol} to="/feed">
								<i className="fas fa-list-alt" />
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnMensajes" className={"nav-link " + cualquierRol} to="/feed">
								<i className="far fa-comment-dots" />
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnPerfil" className={"nav-link " + rolVendedor} to="/perfilVendedor">
								<i className="fas fa-user" />
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnPerfil" className={"nav-link " + rolComprador} to="/perfilComprador">
								<i className="fas fa-user" />
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnSubir" className={"nav-link " + rolVendedor} to="/publicar">
								<i className="fas fa-file-upload" /> <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link id="btnSalir" onClick={() => logout()} className={"nav-link " + cualquierRol}>
								<i className="fas fa-sign-out-alt" /> <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
