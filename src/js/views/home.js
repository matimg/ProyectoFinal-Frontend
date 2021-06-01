import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container cuerpoHome d-flex justify-content-center align-items-center">
		<h1 className="text-center text-white">Nunca soñé con el éxito, trabajé para conseguirlo.</h1>
		<div className="mt-5">
			<button type="button" className="btn m-3 botonAmarillo">
				Quiero vender
			</button>
			<button type="button" className="btn m-3 botonVerde">
				Quiero comprar
			</button>
		</div>
	</div>
);
