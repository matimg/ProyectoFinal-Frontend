import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel } from "../component/carouselFrases";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const cambiarRol = rol => {
		actions.rolUsuario(rol);
	};

	return (
		<div className="container cuerpoHome d-flex justify-content-center align-items-center mt-md-n4 mt-n5">
			<Carousel />
			<div className="central">
				<Link
					to="/inicioSesion"
					type="button"
					id="botonAmarillo"
					className="btn mr-1 mr-md-4 botonAmarillo"
					onClick={() => cambiarRol("Vendedor")}>
					Quiero vender
				</Link>
				<Link
					to="/inicioSesion"
					type="button"
					id="botonVerde"
					className="btn ml-1 ml-md-4  botonVerde"
					onClick={() => cambiarRol("Comprador")}>
					Quiero comprar
				</Link>
			</div>
		</div>
	);
};
