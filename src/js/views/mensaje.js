import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Mensajes = () => {
	const { store, actions } = useContext(Context);
	const [mensajes, setMensajes] = useState([]);
	const params = useParams();

	const getMensajes = async () => {
		let resultado = await actions.getConversacion(params.id);
		console.log(resultado);
		setMensajes(resultado);
	};

	const enviarMensaje = async event => {
		event.preventDefault();
		const form = event.currentTarget;
		console.log(form);
		let resultado = await actions.enviarMensaje(params.id, form.mensaje.value, form.asunto.value);
		if (resultado == "Ok") {
			// alertaOK()
		} else {
			// alertaError()
		}
		getMensajes();
	};

	useEffect(() => {
		getMensajes();
	}, []);

	return (
		<div className="">
			{mensajes.map((elem, iterador) => {
				return <div key={iterador}>{elem.mensaje}</div>;
			})}
			<form onSubmit={() => enviarMensaje(event)}>
				<input placeholder="Asunto" id="asunto" />
				<textarea placeholder="Mensaje" id="mensaje" />
				<button>Enviar</button>
			</form>
		</div>
	);
};
