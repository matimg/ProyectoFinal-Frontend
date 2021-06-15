import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/errorPrivado.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import no from "../../img/no.png";

export const ErrorPrivado = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex justify-content-center align-items-center">
			<div
				className="container d-flex justify-content-center align-items-center mt-n5 "
				id="contenedorErrPrivado">
				<div className="row mt-5 d-flex justify-content-center align-items-center">
					<div className="col">
						<h1 className="text-white mb-3 text-center" id="oops">
							<strong>Mmm..</strong>
						</h1>
					</div>
				</div>
				<div className="row mt-0 mb-5 d-flex justify-content-center align-items-center">
					<div className="col">
						<p className="text-white text-center" id="fraseError">
							<strong>Usted no debería estar aquí...</strong>
						</p>
					</div>
				</div>

				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-10 d-flex justify-content-center align-items-center">
						<img id="imagenErrorPrivado" className="" src={no} />
					</div>
				</div>

				<div className="row mb-4 mt-4 d-flex justify-content-center align-items-center">
					<div className="col">
						<Link to="/">
							<button className="btn mb-4" id="btnInicio">
								<strong>Inicio</strong>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
