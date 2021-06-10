import React, { useContext } from "react";
import "../../styles/confirmarUsuario.scss";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const ConfirmarUsuario = () => {
	const params = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const alertaError = () => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Hubo un problema en el servido, intente mas tarde"
		});
	};

	const activarUsuario = async id => {
		const resultado = await actions.activarUsuario(id);

		if (resultado == "ok") {
			history.push("/inicioSesion");
		} else {
			alertaError();
		}
	};

	return (
		<div className="container cuerpoHome d-flex justify-content-center align-items-center mt-n4">
			<div className="jumbotron p-3">
				<h1 className="display-4 text-center">Usuario verificado</h1>
				<p className="lead text-center">Disfruta nuestros servicios</p>
				<hr className="my-4" />
				<Link onClick={() => activarUsuario(params.id)} className="btn btn-block botonConfirmar mt-n1">
					Ingresar
				</Link>
			</div>
		</div>
	);
};
