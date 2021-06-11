import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/feed.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Masonry from "react-masonry-css";
import { Spinner } from "../component/spinner";
var cantidad = 0;
var pixeles = 400;
export const Feed = () => {
	const { store, actions } = useContext(Context);
	const [cantidadDeLlamados, setCantidadLlamados] = useState(0);
	const [publicaciones, setPublicaciones] = useState([]);
	const [spinner, setSpinner] = useState("");
	const [loading, setLoading] = useState(false);

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
			console.log(data);
			setLoading(false);
			if (cantidad == 0) {
				setPublicaciones(data);
			} else {
				let aux = [...publicaciones, ...data];
				setPublicaciones(aux);
			}
			cantidad = cantidad + 1;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAllPublicaciones();
		window.addEventListener("scroll", escucharScroll);
	}, []);

	useEffect(
		() => {
			if (pedirMas) {
				fetchAllPublicaciones();
				pixeles = pixeles * 2;
				setPedirMas(false);
				console.log(pixeles);
			}
		},
		[pedirMas]
	);

	const escucharScroll = () => {
		if (window.scrollY > pixeles) {
			setPedirMas(true);
		}
	};

	useEffect(
		() => {
			if (loading) {
				alert("Llego al spinner");
				setSpinner(<Spinner />);
			} else {
				setSpinner("");
			}
		},
		[loading]
	);

	return (
		<div id="divExterno" className=" d-flex justify-content-center align-items-center mx-2 mt-5">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column">
				{publicaciones.map((elem, iterador) => {
					let etiqueta;
					if (elem.formato == "image") {
						etiqueta = <img className="rounded" src={elem.url} alt="" />;
					} else {
						etiqueta = <video className="rounded" src={elem.url} alt="" />;
					}
					return (
						<div className="col-md-4 col-6 mb-3 " key={iterador} id="contenedor">
							<div className="">
								{etiqueta}
								<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
									{elem.titulo}
									<div className="btn-group dropleft ml-auto">
										<button
											type="button"
											className="btn btn-secondary btn-sm bg-transparent border-0 rounded"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-ellipsis-h" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Masonry>
			){spinner}
			{/* <Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column">
				<div id="divInterno" className="mx-2">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/3b/5d/58/3b5d58a963daa6d83182bbf8c9484210.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>

				<div id="divInterno" className="mx-2">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/f8/80/0d/f8800d4e0b268a6ed1d543c1ff52f4f3.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/40/bd/61/40bd61dfe070e72927d1e8d5a703110f.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/88/6e/aa/886eaaabf842f0da655a8ac33bea72c8.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/35/bb/5b/35bb5b1e925f08f7fa93d5932636f15b.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/10/d3/f5/10d3f5258dff019b0888bf1918473860.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/e7/f4/95/e7f495046e53ce75f6416f752c69b748.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/b4/04/d8/b404d8a9c2ea248334dba326d066da4d.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/35/bb/5b/35bb5b1e925f08f7fa93d5932636f15b.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno" className="mx-2">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/18/5e/1e/185e1ea10058aa770d8104baae0b3e13.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
			</Masonry> */}
		</div>
	);
};
