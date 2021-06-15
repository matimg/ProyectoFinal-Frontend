import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/comoVender.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ComoVender = () => {
	const { store, actions } = useContext(Context);
	const cambiarRol = rol => {
		actions.rolUsuario(rol);
	};

	return (
		<div className="">
			<div className="container-fluid blue-bg d-flex justify-content-center align-items-center mt-n5">
				<div className="container">
					<h1 className="pt-2 text-center tituloV">
						<strong>¿Cómo vender?</strong>
					</h1>
					{/* <!--first section--> */}
					<div className="row align-items-center how-it-works">
						<div className="col-2 text-center bottom">
							<div className="circle">1</div>
						</div>
						<div className="col-6">
							<h5>
								<strong>Registro</strong>
							</h5>
							<p>
								El primer paso es registrarse ingresando tus datos para poder disfrutar de todos
								nuestros servicios
							</p>
						</div>
					</div>
					{/* <!--path between 1-2--> */}
					<div className="row timeline">
						<div className="col-2">
							<div className="corner top-right" />
						</div>
						<div className="col-8">
							<hr />
						</div>
						<div className="col-2">
							<div className="corner left-bottom" />
						</div>
					</div>
					{/* <!--second section--> */}
					<div className="row align-items-center justify-content-end how-it-works">
						<div className="col-6 text-right">
							<h5>
								<strong>Activa tu cuenta</strong>
							</h5>
							<p>
								Luego del registro debes dirigirte a tu mail y activar tu cuenta para poder iniciar
								sesión
							</p>
						</div>
						<div className="col-2 text-center full">
							<div className="circle">2</div>
						</div>
					</div>
					{/* <!--path between 2-3--> */}
					<div className="row timeline">
						<div className="col-2">
							<div className="corner right-bottom" />
						</div>
						<div className="col-8">
							<hr />
						</div>
						<div className="col-2">
							<div className="corner top-left" />
						</div>
					</div>
					{/* <!--third section--> */}
					<div className="row align-items-center how-it-works">
						<div className="col-2 text-center top">
							<div className="circle">3</div>
						</div>
						<div className="col-6">
							<h5>
								<strong>Publica tus creaciones</strong>
							</h5>
							<p>Publica tus mejores creaciones para conseguir a tus futuros clientes</p>
						</div>
					</div>
					<div className="container mb-5 d-flex justify-content-center align-items-center mt-5">
						<Link
							to="/inicioSesion"
							type="button"
							id="botonVerde"
							className="btn ml-1 ml-md-4 botonVerde"
							onClick={() => cambiarRol("Vendedor")}>
							Quiero vender
						</Link>

						<Link to="/" type="button" id="btnVolver" className="btn ml-1 ml-md-4  botonVerde">
							Inicio
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
