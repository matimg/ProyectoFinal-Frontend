import React, { useContext, useState, useEffect } from "react";
import "../../styles/detalle.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detalle = () => {
	const { store, actions } = useContext(Context);
	const [publicacion, setPublicacion] = useState({});
	const [usuario, setUsuario] = useState({});
	const params = useParams();

	const traerDetalle = async () => {
		let detalle = await actions.getDetalle(params.id);
		if (detalle != "error") {
			setPublicacion(detalle);
			let aux = detalle.usuario;
			setUsuario(aux);
		}
	};
	useEffect(() => {
		traerDetalle();
	}, []);
	return (
		<div className="container d-flex justify-content-center align-items-center modificarHeight">
			<div className="card bg-transparent text-white border-0 contenedorCarta">
				<img src={publicacion.url} className="card-img imagen" alt="..." />
				<div className="card-img-overlay textoDetalle container">
					<div className="row rounded-top" id="fondoOpacidad">
						<div className="col">
							<h5 className="card-title">{publicacion.titulo}</h5>
						</div>
					</div>
					<div className="row" id="fondoOpacidad">
						<div className="col">
							<p className="card-text">{publicacion.descripcion}</p>
						</div>
					</div>
					<div className="row" id="fondoOpacidad">
						<div className="col">
							<p className="card-text">
								{usuario.nombre} {usuario.apellido}
							</p>
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
