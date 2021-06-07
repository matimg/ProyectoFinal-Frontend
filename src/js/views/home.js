import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const cambiarRol = rol => {
		actions.rolUsuario(rol);
	};

	return (
		<div className="container cuerpoHome d-flex justify-content-center align-items-center mt-n4">
			<h1 className="text-center text-white">Nunca soñé con el éxito, trabajé para conseguirlo.</h1>
			<div className="mt-5">
				<Link
					to="/inicioSesion"
					type="button"
					className="btn m-3 botonAmarillo"
					onClick={() => cambiarRol("Vendedor")}>
					Quiero vender
				</Link>
				<Link
					to="/inicioSesion"
					type="button"
					className="btn m-3 botonVerde"
					onClick={() => cambiarRol("Comprador")}>
					Quiero comprar
				</Link>
			</div>
		</div>
	);
};
