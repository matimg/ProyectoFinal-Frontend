import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Mensajes = () => {
	const { store, actions } = useContext(Context);
	const [mensajes, setMensajes] = useState([]);

	const getConversacion = async () => {
		//El id de la persona me lo tiene que pasar por parametro
		let resultado = await actions.getConversacion("Persona con la que quiero contactarme");
		setMensajes(resultado);
	};

	const enviarMensaje = async () => {
		let resultado = await actions.enviarMensaje("Receptor", "mensaje", "asunto");
		if (resultado == "Ok") {
			// alertaOK()
		} else {
			// alertaError()
		}
		getConversacion("Receptor");
	};

	useEffect(() => {
		getConversacion();
	}, []);

	return (
		<div className="">
			{mensajes.map((elem, iterador) => {
				return <div key={iterador}>{elem.mensaje}</div>;
			})}
			<form onSubmit={() => enviarMensaje(event)}>
				<input placeholder="Asunto" />
				<textarea />
			</form>
		</div>
	);
};
