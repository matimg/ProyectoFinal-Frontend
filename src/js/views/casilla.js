import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/mensaje.scss";
import { Context } from "../store/appContext";

export const Casilla = () => {
	const { store, actions } = useContext(Context);
	const [mensajes, setMensajes] = useState([]);
	const usuario = JSON.parse(localStorage.getItem("usuario"));

	const getMensajes = async () => {
		let resultado = await actions.getCasilla();
		setMensajes(resultado);
	};

	useEffect(() => {
		getMensajes();
	}, []);

	return (
		<div className="container d-flex justify-content-center">
			<table className="table table-sm table-dark w-50 mt-5">
				<thead>
					<tr>
						<th scope="col">Conversaciones</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody>
					{mensajes.map((elem, iterador) => {
						let nombre = "";
						let link = "";
						if (elem.idEmisor === usuario.id) {
							nombre = elem.receptor;
							link = elem.idReceptor;
						} else {
							nombre = elem.emisor;
							link = elem.idEmisor;
						}
						return (
							<tr key={iterador}>
								<th>{nombre}</th>
								<td>
									<Link to={"/mensajes/" + link}>
										<i className="far fa-comments" type="button" />
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
