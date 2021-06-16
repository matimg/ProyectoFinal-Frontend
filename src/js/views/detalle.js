import React, { useContext, useState, useEffect } from "react";
import "../../styles/detalle.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Alert } from "bootstrap";

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

	if (publicacion.formato == "image") {
		return (
			<div className="container d-flex justify-content-center align-items-center modificarHeight">
				<div
					className="container rounded mt-5"
					id="cuerpoDetalle"
					style={{ backgroundImage: `url(${publicacion.url})` }}>
					<div className="container text-white" id="textoDetalle">
						<h3>{publicacion.titulo}</h3>
						<p>{publicacion.descripcion}</p>
						<div className="container">
							<div className="rounded-pill bg-dark ml-n3" id="nombreDetalle">
								<p className="mx-2" id="soloTexto">
									{usuario.nombre} {usuario.apellido}
								</p>
							</div>
						</div>
						<div className="container mt-5 ml-0 p-0" id="contactoDetalle">
							<p className="m-0 ml-1 d-inline">Contactar</p>
							<Link to={"/mensajes/" + usuario.id}>
								<i className="far fa-comment-dots d-inline ml-2" id="iconoDetalle2" type="button" />
							</Link>
							<div id="iconoDetalle" />
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container d-flex flex-column justify-content-center align-items-center modificarHeight">
				<video className="rounded mt-2" style={{ width: "75%" }} src={publicacion.url} alt="" controls />
				<div style={{ width: "75%" }} className="d-flex flex-column justify-content-start bg-secondary">
					<h3 className="text-start">{publicacion.titulo}</h3>
					<div className="d-flex">
						<p>{publicacion.descripcion}</p>
						<p className="ml-3">
							{usuario.nombre} {usuario.apellido}
						</p>
					</div>
				</div>
			</div>
		);
	}
};
