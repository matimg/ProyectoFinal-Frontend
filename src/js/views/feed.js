import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/feed.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Masonry from "react-masonry-css";
import { Spinner } from "../component/spinner";

var pixeles = 400;
export const Feed = () => {
	const { store, actions } = useContext(Context);
	const [cantidadDeLlamados, setCantidadLlamados] = useState(0);
	const [publicaciones, setPublicaciones] = useState([]);
	const [spinner, setSpinner] = useState("");
	const [loading, setLoading] = useState(false);
	const [favoritos, setFavoritos] = useState([]);
	const [cantidad, setCantidad] = useState(0);

	const [pedirMas, setPedirMas] = useState(false);

	const breakpointColumnsObj = {
		default: 5,
		1100: 3,
		700: 2
	};

	const fetchAllPublicaciones = async () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", sessionStorage.getItem("token"));

		var requestOptions = {
			method: "GET",
			headers: myHeaders
		};

		try {
			setLoading(true);
			const res = await fetch(process.env.URL + "/allPublicaciones/" + cantidad, requestOptions);
			const data = await res.json();
			console.log("Publicaciones", data);
			setLoading(false);
			if (cantidad == 0) {
				setPublicaciones(data);
			} else {
				let aux = [...publicaciones, ...data];
				setPublicaciones(aux);
			}
			setCantidad(cantidad + 1);
		} catch (error) {
			console.log(error);
		}
	};

	const traerFavoritos = async () => {
		const fav = await actions.getFavoritos();
		setFavoritos(fav);
	};

	useEffect(() => {
		pixeles = 400;
		fetchAllPublicaciones();
		traerFavoritos();
		window.addEventListener("scroll", escucharScroll);
	}, []);

	useEffect(
		() => {
			if (pedirMas) {
				fetchAllPublicaciones();
				pixeles = pixeles * 2;
				console.log(pixeles);
				setPedirMas(false);
				console.log(pixeles);
			}
		},
		[pedirMas]
	);

	const escucharScroll = () => {
		if (window.scrollY > pixeles) {
			console.log("scroll", window.scrollY);
			setPedirMas(true);
		}
	};

	useEffect(
		() => {
			if (loading) {
				setSpinner(<Spinner />);
			} else {
				setSpinner("");
			}
		},
		[loading]
	);
	useEffect(
		() => {
			publicaciones.map;
		},
		[spinner]
	);
	//Agregar Favoritos
	const mensajeError = () => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Hubo un problema, intente más tarde"
		});
	};

	const agregarFavorito = async id => {
		await actions.agregarFavorito(id);
		traerFavoritos();
	};
	const eliminarFavorito = async id => {
		await actions.eliminarFavorito(id);
		traerFavoritos();
	};
	return (
		<div id="divExterno" className=" d-flex justify-content-center align-items-center mx-2 mx-md-0 mt-5">
			<Link to="/perfilComprador">Perfil</Link>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column">
				{publicaciones.map((elem, iterador) => {
					let etiqueta;
					if (elem.formato == "image") {
						etiqueta = <img className="rounded" id="imgId" src={elem.url} alt="" />;
					} else {
						etiqueta = <video className="rounded" id="imgId" src={elem.url} alt="" />;
					}

					let estrella = <i onClick={() => agregarFavorito(elem.id)} id="iconoFav" className="far fa-star" />;

					for (let i = 0; i < favoritos.length; i++) {
						if (elem.id === favoritos[i].publicaciones.id) {
							estrella = (
								<i
									onClick={() => eliminarFavorito(favoritos[i].id)}
									id="iconoFav"
									className="fas fa-star"
								/>
							);
							break;
						}
					}
					return (
						<div className="col-md-4 col-6 mb-3 " key={iterador}>
							<div className="mx-md-4" id="divInterno">
								{etiqueta}
								<div className="row d-flex justify-content-start px-4 px-md-0 pl-md-2">
									<div className="col-xs-4" id="botonCentrar">
										<div className="btn">
											{estrella}
											{/* <i
												onClick={() => agregarFavorito(elem.id)}
												id="iconoFav"
												className="far fa-star"
											/> */}
										</div>
									</div>
									<div className="col-xs-8">
										<div id="footerImagen" className=" text-white py-1">
											<p className="mt-1">{elem.titulo}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Masonry>
			{spinner}
		</div>
	);
};
