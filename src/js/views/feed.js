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
	const [image, setImage] = useState([]);
	const [video, setVideo] = useState([]);
	const [sonido, setSonido] = useState([]);
	const [array, setArray] = useState([]);

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
			// if (cantidad === 0) {
			let aux3 = [...array, ...data];
			setArray(aux3);
			// }
			//Separamos las publicaciones en distintos array dependiendo de la categoria
			let auxVideo = [];
			let auxImage = [];
			let auxSonido = [];
			for (let i = 0; i < data.length; i++) {
				if (data[i].categoria === "Video") {
					auxVideo.push(data[i]);
				} else if (data[i].categoria === "Image") {
					auxImage.push(data[i]);
				} else {
					auxSonido.push(data[i]);
				}
			}
			let aux2 = [...video, ...auxVideo];
			setVideo(aux2);
			aux2 = [...image, ...auxImage];
			setImage(aux2);
			aux2 = [...sonido, ...auxSonido];
			setSonido(aux2);
			//Guardamos un array con todas las publicaciones
			let aux = [...publicaciones, ...data];
			setPublicaciones(aux);
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
	const mostrarArray = categoria => {
		if (categoria === "todo") {
			setArray(publicaciones);
		} else if (categoria === "imagen") {
			setArray(image);
		} else if (categoria === "video") {
			setArray(video);
		} else {
			setArray(sonido);
		}
	};
	return (
		<div id="divExterno" className=" d-flex justify-content-center align-items-center mx-2 mx-md-0 mt-5">
			<div id="navSelect" className="mt-n3 mb-4">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<a
							onClick={() => mostrarArray("todo")}
							className="nav-link active"
							id="home-tab"
							data-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							Todo
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							onClick={() => mostrarArray("imagen")}
							className="nav-link"
							id="home-tab"
							data-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							Imagen
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							onClick={() => mostrarArray("video")}
							className="nav-link"
							id="profile-tab"
							data-toggle="tab"
							href="#profile"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							Video
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							onClick={() => mostrarArray("sonido")}
							className="nav-link"
							id="contact-tab"
							data-toggle="tab"
							href="#contact"
							role="tab"
							aria-controls="contact"
							aria-selected="false">
							Sonido
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" />
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" />
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab" />
				</div>
			</div>
			<div className=" ">
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column">
					{array.map((elem, iterador) => {
						let estrella = (
							<i onClick={() => agregarFavorito(elem.id)} id="iconoFav" className="far fa-star" />
						);

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
						if (store.tipoUsuario === "Vendedor") {
							estrella = "";
						}

						let footer;
						let etiqueta;
						if (elem.formato == "image") {
							etiqueta = (
								<Link to={"/detalle/" + elem.id}>
									<img className="rounded" id="imgId" src={elem.url} alt="" />
								</Link>
							);
							footer = (
								<div className="row d-flex justify-content-start px-4 px-md-0 pl-md-2">
									<div className="col-xs-4" id="botonCentrar">
										<div className="btn">{estrella}</div>
									</div>
									<div className="col-xs-8">
										<div id="footerImagen" className=" text-white py-1">
											<p className="mt-1">{elem.titulo}</p>
										</div>
									</div>
								</div>
							);
						} else {
							etiqueta = <video className="rounded" id="imgId" src={elem.url} alt="" controls />;
							footer = (
								<div className="row d-flex justify-content-start px-4 px-md-0 pl-md-2">
									<div className="col-xs-4" id="botonCentrar">
										<div className="btn">{estrella}</div>
									</div>
									<div className="col-xs-8">
										<div id="footerImagen" className=" text-white py-1 d-flex">
											<p className="mt-1">{elem.titulo}</p>
											<Link to={"/detalle/" + elem.id}>
												<i className="fas fa-plus-circle text-white ml-2 mt-2" />
											</Link>
										</div>
									</div>
								</div>
							);
						}

						return (
							<div className="col-md-4 col-6 mb-3 " key={iterador}>
								<div className="mx-md-4" id="divInterno">
									{etiqueta}
									{footer}
								</div>
							</div>
						);
					})}
				</Masonry>
			</div>
			{spinner}
		</div>
	);
};
