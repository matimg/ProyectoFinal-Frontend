import React, { useContext, useState, useEffect, useRef } from "react";
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
		let resultado = await actions.enviarMensaje(params.id, form.textMensaje.value, "");
		form.textMensaje.value = "";
		getMensajes();
	};

	useEffect(() => {
		getMensajes();
	}, []);

	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(
		() => {
			scrollToBottom();
		},
		[mensajes]
	);

	return (
		<div className="container d-flex justify-content-center align-items-center" id="fondoMensajes">
			<div className="container rounded p-0 " id="contenedorMensajes">
				<div
					style={{ height: "15%" }}
					className="rounded-top d-flex justify-content-center align-items-center mb-3"
					id="tituloContenedor">
					<h5 className="text-white">Mensajes</h5>
				</div>
				<div style={{ height: "70%", overflowY: "scroll", scrolltop: "300px" }}>
					{mensajes.map((elem, iterador) => {
						if (elem.usuarioEmisor.id === usuario.id) {
							return (
								<div key={iterador} className="d-flex justify-content-start">
									<div className="text-white px-2 ml-3 py-2 my-1 text-center mensaje">
										{elem.mensaje}
									</div>
								</div>
							);
						} else {
							return (
								<div key={iterador} className="d-flex justify-content-end">
									<div className="text-white px-2 mr-3 py-2 my-1 text-center mensaje2">
										{elem.mensaje}
									</div>
								</div>
							);
						}
					})}
					<div ref={messagesEndRef} />
				</div>
				<form
					style={{ height: "15%" }}
					onSubmit={() => enviarMensaje(event)}
					className="container-fluid d-flex justify-content-center align-items-center rounded-bottom mt-1"
					id="formulario">
					<textarea
						className="rounded mx-0 mb-1 mt-1 border-0"
						style={{ width: "500px", margin: "auto" }}
						placeholder="Mensaje"
						id="textMensaje"
					/>

					<button
						style={{ width: "75px", margin: "auto" }}
						className=" btn ml-1 mb-1 mt-1 mx-0"
						id="botonEnviar">
						<i className="far fa-paper-plane" id="send" />
					</button>
				</form>
			</div>
		</div>
	);
};
