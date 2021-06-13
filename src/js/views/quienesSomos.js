import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/quienesSomos.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import au from "../../img/au.png";

export const QuienesSomos = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row mt-4 mb-2 d-flex justify-content-center align-items-center">
				<h1 className="text-white mb-3">
					<strong>¿Quiénes Somos?</strong>
				</h1>
			</div>
			<div className="row d-flex justify-content-center align-items-center">
				<div className="col-10 col-md-5 " id="aboutus">
					<p>
						EL avance de la virtualidad en el mundo está generando una brecha muy importante entre las
						personas que se adaptan a lo digital y los que no.
					</p>
					<p>
						Ya no es el consumidor el que busca a los negocios, son los negocios los que tienen que buscar a
						sus consumidores, y la clave para ésta busqueda es el mundo digital.
					</p>
					<p>
						ECOM surge ante ésta necesidad, surge con el boom de la virtualidad, surge para ser el nexo que
						conecta el contenido con su demanda y sin siquiera salir de tu casa.
					</p>
				</div>

				<div className="col-10 col-md-6 ml-0 ml-md-n5 d-flex justify-content-center align-items-center">
					<img id="imagen" src={au} style={{ width: "80%" }} />
				</div>
			</div>
			<div className="row mt-4 d-flex justify-content-center align-items-center">
				<Link to="/">
					<p className="ecom text-white">
						<strong>ECOM - El Comercio Online Multimedia</strong>
					</p>
				</Link>
			</div>
		</div>
	);
};
