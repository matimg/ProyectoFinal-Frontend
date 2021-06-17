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
			<div className="container py-5">
				<div className="row">
					<div className="col">
						<div className="video-card h-75 w-100 rounded shadow position-relative">
							<video className="vvideo" src={publicacion.url} alt="" controls />
							<div className="videoDescripcion position-absolute text-white">
								<h3 className="soloTextoNu font-weight-bold">{publicacion.titulo}</h3>
								<div className="soloTextoNu">{publicacion.descripcion}</div>
								<div className="soloTextoNu rounded-pill bg-dark mt-2 ml-n1 px-2" id="nombreDetalle">
									{usuario.nombre} {usuario.apellido}
								</div>
								<div className="container mt-5 ml-0 p-0" id="contactoDetalle">
									<p className="m-0 ml-1 d-inline">Contactar</p>
									<Link to={"/mensajes/" + usuario.id}>
										<i
											className="far fa-comment-dots d-inline ml-2"
											id="iconoDetalle2"
											type="button"
										/>
									</Link>
									<div id="iconoDetalle" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
