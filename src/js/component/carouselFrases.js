import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/carousel.scss";
import slide01 from "../../img/slide01.png";
import slide02 from "../../img/slide02.png";
import slide03 from "../../img/slide03.png";
import slide04 from "../../img/slide04.png";
import slide05 from "../../img/slide05.png";

export const Carousel = () => {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<div id="carru" className="carousel slide " data-interval="6000" data-ride="carousel">
				{/* <ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol> */}
				<div className="carousel-inner text-white text-center mb-5 ">
					<div className="carousel-item active ">
						<div className="row d-flex justify-content-center align-items-center">
							<div
								className="col-md-4 col-10 d-flex justify-content-center align-items-center mb-3 mb-md-0"
								id="texto">
								<h1 className="mt-3 mt-md-0 mb-3 mb-md-5">
									<strong>El contenido ideal para tus redes sociales</strong>
								</h1>
								<p>Hacé click en quiero comprar, y podés disfrutar de todos nuestros servicios</p>
							</div>

							<div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
								<img id="imagen" src={slide01} style={{ width: "100%" }} />
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex justify-content-center align-items-center">
							<div
								className="col-md-4 col-10 d-flex justify-content-center align-items-center mb-3 mb-md-0"
								id="texto">
								<h1 className="mt-3 mt-md-0 mb-3 mb-md-5">
									<strong>Producís contenido audiovisual?</strong>
								</h1>
								<p>Hacé click en quiero vender, y podés disfrutar de todos nuestros servicios</p>
							</div>

							<div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
								<img id="imagen" src={slide02} style={{ width: "80%" }} />
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex justify-content-center align-items-center">
							<div
								className="col-md-4 col-10 d-flex justify-content-center align-items-center mb-3 mb-md-0"
								id="texto">
								<h1 className="mt-3 mt-md-0 mb-3 mb-md-5">
									<strong>Tenés ideas creativas?</strong>
								</h1>
								<p>Hacé click en quiero vender, y podés disfrutar de todos nuestros servicios</p>
							</div>

							<div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
								<img id="imagen" src={slide03} style={{ width: "80%" }} />
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex justify-content-center align-items-center">
							<div
								className="col-md-4 col-10 d-flex justify-content-center align-items-center mb-3 mb-md-0"
								id="texto">
								<h1 className="mt-3 mt-md-0 mb-3 mb-md-5">
									<strong>Seleccioná y destacá a tus creadores favoritos</strong>
								</h1>
								<p>Hacé click en quiero comprar, y podés disfrutar de todos nuestros servicios</p>
							</div>

							<div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
								<img id="imagen" src={slide04} style={{ width: "80%" }} />
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex justify-content-center align-items-center">
							<div
								className="col-md-4 col-10 d-flex justify-content-center align-items-center mb-3 mb-md-0"
								id="texto">
								<h1 className="mt-3 mt-md-0 mb-3 mb-md-5">
									<strong>La publicidad perfecta para aumentar los ingresos de tu empresa</strong>
								</h1>
								<p>Hacé click en quiero comprar, y podés disfrutar de todos nuestros servicios</p>
							</div>

							<div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
								<img id="imagen" src={slide05} style={{ width: "80%" }} />
							</div>
						</div>
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
