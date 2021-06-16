import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/mensaje.scss";
import { Context } from "../store/appContext";

export const Mensajes = () => {
	const { store, actions } = useContext(Context);
	const [mensajes, setMensajes] = useState([]);
	const params = useParams();
	const usuario = JSON.parse(localStorage.getItem("usuario"));

	const getMensajes = async () => {
		let resultado = await actions.getConversacion(params.id);
		console.log(resultado);
		setMensajes(resultado);
	};

	const enviarMensaje = async event => {
		event.preventDefault();
		const form = event.currentTarget;
		console.log(form);
		let resultado = await actions.enviarMensaje(params.id, form.mensaje.value, "");
		form.mensaje.value = "";
		getMensajes();
	};

	useEffect(() => {
		getMensajes();
	}, []);

	return (
		<div className="container mt-3 rounded  p-0 " style={{ width: "620px" }} id="contenedorMensajes">
			{mensajes.map((elem, iterador) => {
				if (elem.usuarioEmisor.id === usuario.id) {
					return (
						<div key={iterador} className="d-flex justify-content-start">
							<div
								style={{ width: "350px" }}
								className="ml-3 bg-secondary py-2 my-1 text-center"
								id="mensaje">
								{elem.mensaje}
							</div>
						</div>
					);
				} else {
					return (
						<div key={iterador} className="d-flex justify-content-end">
							<div
								style={{ width: "350px" }}
								className="mr-3 bg-primary py-2 my-1 text-center"
								id="mensaje2">
								{elem.mensaje}
							</div>
						</div>
					);
				}
			})}
			<form onSubmit={() => enviarMensaje(event)} className="mt-5 mb-3 d-flex aling-items-center">
				<textarea
					className="rounded"
					style={{ width: "500px", margin: "auto" }}
					placeholder="Mensaje"
					id="mensaje"
				/>

				<button style={{ width: "75px", margin: "auto" }} className="btn btn-primary mt-1">
					Enviar
				</button>
			</form>
		</div>
	);
};
