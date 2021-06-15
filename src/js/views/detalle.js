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
			<div className="card mb-3" id="cartaCuerpo">
				<div className="row">
					<div className="col-md-9 d-flex justify-content-center align-items-center">
						<img src={publicacion.url} alt="..." id="imagenDetalle" />
					</div>
					<div className="col-md-3">
						<div className="card-body px-1 px-md-0">
							<h5 className="card-title">{publicacion.titulo}</h5>
							<p className="card-text">{publicacion.descripcion}</p>
							<p className="card-text">
								<small className="text-muted">
									{usuario.nombre} {usuario.apellido}
								</small>
							</p>
							<p className="card-text" id="contacto">
								Contacta a este usuario{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="card bg-transparent text-white border-0 contenedorCarta">
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
			</div> */}
		</div>
	);
};
