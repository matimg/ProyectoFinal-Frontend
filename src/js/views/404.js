import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/404.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import error from "../../img/error.png";

export const Error404 = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex justify-content-center align-items-center">
			<div
				className="container d-flex justify-content-center align-items-center mt-n5 mt-md-0"
				id="contenedor404">
				<div className="row d-flex justify-content-center align-items-center" id="filaOops">
					<div className="col">
						<h1 className="text-white mb-3 text-center" id="oops">
							<strong>OOPS!</strong>
						</h1>
					</div>
				</div>
				<div className="row mt-0 mb-2 d-flex justify-content-center align-items-center">
					<div className="col">
						<p className="text-white mb-3 text-center" id="fraseError">
							<strong>Esta página no esta disponible...</strong>
						</p>
					</div>
				</div>

				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-10 d-flex justify-content-center align-items-center">
						<img id="imagenError" className="" src={error} />
					</div>
				</div>

				<div className="row mb-4 mt-4 d-flex justify-content-center align-items-center">
					<div className="col">
						<Link to="/">
							<button className="btn" id="btnInicio">
								<strong>Inicio</strong>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
