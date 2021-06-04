import React from "react";
import "../../styles/confirmarUsuario.scss";
import { Link } from "react-router-dom";

export const ConfirmarUsuario = () => (
	<div className="container cuerpoHome d-flex justify-content-center align-items-center mt-n4">
		<div className="jumbotron p-3">
			<h1 className="display-4 text-center">Usuario verificado</h1>
			<p className="lead text-center">Disfruta nuestros servicios</p>
			<hr className="my-4" />
			<Link to="/inicioSesion" className="btn btn-block botonConfirmar mt-n1">
				Ingresar
			</Link>
		</div>
	</div>
);
