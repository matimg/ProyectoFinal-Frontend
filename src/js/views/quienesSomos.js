import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/quienesSomos.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import au from "../../img/au.png";

export const QuienesSomos = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex justify-content-center align-items-center ">
			<div className="row">
				<div className="col" id="aboutus">
					<h1 className="">
						<strong>¿Quiénes Somos?</strong>
					</h1>
					<p>
						EL avance de la virtualidad en el mundo está generando una brecha muy importante entre las
						personas que se adaptan a lo digital y los que no. Ya no es el consumidor el que busca a los
						negocios, son los negocios los que tienen que buscar a sus consumidores, y la clave para ésta
						busqueda es el mundo digital
					</p>
					<p>
						ECOM surge ante ésta necesidad, surge con el boom de la virtualidad, surge para ser el nexo que
						conecta el contenido con su demanda y sin siquiera salir de tu casa.
					</p>
					<p>ECOM - El Comercio Online Multimedia</p>
				</div>

				<div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
					<img id="imagen" src={au} style={{ width: "60%" }} />
				</div>
			</div>
		</div>
	);
};
