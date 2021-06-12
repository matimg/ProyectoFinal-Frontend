import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import slide1 from "../../img/slide1.png";
import slide2 from "../../img/slide2.png";

export const Carousel = () => {
	return (
		<div className="">
			<div id="carouselExampleIndicators" className="carousel slide" data-interval="5000" data-ride="carousel">
				{/* <ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol> */}
				<div className="carousel-inner text-white text-center">
					<div className="carousel-item active">
						<img src={slide1} style={{ width: "90%" }} />
					</div>
					<div className="carousel-item">
						<img src={slide2} style={{ width: "90%" }} />
					</div>
					<div className="carousel-item">
						<h1>Tu contenido está a un click de distancia</h1>
					</div>
					<div className="carousel-item">
						<h1>Creamos contenido a tu medida</h1>
					</div>
					<div className="carousel-item">
						<h1>El logo que estás pensando</h1>
					</div>
					<div className="carousel-item">
						<h1>Ponele video, imagen y sonido a tu negocio</h1>
					</div>
				</div>

				{/* <a
					className="carousel-control-prev mr-5"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next ml-5"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a> */}
			</div>
		</div>
	);
};
