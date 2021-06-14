import React, { useContext } from "react";
import "../../styles/detalle.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Detalle = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container d-flex justify-content-center align-items-center modificarHeight">
			<div className="card bg-transparent text-white border-0 contenedorCarta">
				<img
					src="https://media.istockphoto.com/vectors/collage-contemporary-floral-seamless-pattern-modern-exotic-jungle-vector-id1166277130?k=6&m=1166277130&s=612x612&w=0&h=XzkRqgq9-JmZgkRJh2fLEM1Bu0bDZGViA0y2Pny2g5I="
					className="card-img imagen"
					alt="..."
				/>
				<div className="card-img-overlay textoDetalle container">
					<div className="row rounded-top" id="fondoOpacidad">
						<div className="col">
							<h5 className="card-title">Titulo</h5>
						</div>
					</div>
					<div className="row" id="fondoOpacidad">
						<div className="col">
							<p className="card-text">Descripcion</p>
						</div>
					</div>
					<div className="row rounded-bottom" id="fondoOpacidad">
						<div className="col">
							<p className="card-text" id="contacto">
								Contacta a este usuario{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
