import React, { useContext, useState, useEffect } from "react";
import "../../styles/perfilComprador.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CambiarDatosPerfil } from "../component/cambiarDatosPerfil";
import Swal from "sweetalert2";
import Masonry from "react-masonry-css";

export const PerfilComprador = () => {
	const { store, actions } = useContext(Context);
	let usuario = JSON.parse(localStorage.getItem("usuario"));
	const [modal, setModal] = useState("");
	const [favoritos, setFavoritos] = useState([]);

	const mostrarModal = () => {
		setModal("");
		setModal(<CambiarDatosPerfil habilitar={true} funcion={escucharRegistro} />);
	};
	function escucharRegistro() {
		setModal("");
	}
	let nombre = usuario.nombre;
	let apellido = usuario.apellido;
	let fecha = usuario.fechaNacimiento;
	let email = usuario.email;

	const traerFavoritos = async () => {
		const fav = await actions.getFavoritos();
		setFavoritos(fav);
	};
	useEffect(() => {
		traerFavoritos();
	}, []);

	const llamar = async id => {
		let resultado = await actions.eliminarFavorito(id);
		if (resultado == "ok") {
			Swal.fire("Eliminado correctamente", "", "success");
			traerFavoritos();
		} else {
			console.log("Error");
		}
	};

	const eliminar = id => {
		Swal.fire({
			title: "¿Está seguro que desea eliminar de su lista de favoritos?",
			showCancelButton: true,
			confirmButtonText: `Confirmar`,
			cancelButtonText: `Cancelar`
		}).then(result => {
			if (result.isConfirmed) {
				llamar(id);
			}
		});
	};

	const editar = () => {};

	const breakpointColumnsObj = {
		default: 4,
		1200: 3,
		800: 2
	};

	return (
		<div className="row p-0 mx-1 d-flex justify-content-center align-items-center cuerpoPerfil mx-2">
			<div
				id="perfil"
				style={{ height: "440px" }}
				className="col-md-3 col-sm-10 shadow rounded d-flex flex-column align-items-center mr-md-5 mr-0 mt-5 py-3 align-self-start">
				<img
					src="https://i.pinimg.com/474x/83/a9/a1/83a9a144ab03763667b8d8aa381bb441.jpg"
					alt="avatar"
					className="rounded-circle w-25 mb-3"
				/>
				<div id="datos" className="w-75 text-center">
					<div id="inputPerfil" className="rounded">
						{nombre}
					</div>
					<div id="inputPerfil" className="rounded">
						{apellido}
					</div>
					<div id="inputPerfil" className="rounded">
						{fecha}
					</div>
					<div id="inputPerfil" className="rounded">
						{email}
					</div>
				</div>
				<button onClick={mostrarModal} id="botonEditarPerfil" className="btn">
					Editar perfil
				</button>
			</div>
			<div className="col-md-7 col-sm-10 d-flex justify-content-center" id="contenedorFavoritos">
				<div className="row d-flex justify-content-center mt-5 mb-3">
					<h3 className="text-white">
						<strong>Mis favoritos</strong>
					</h3>
				</div>
				<div className=" d-flex justify-content-center">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column">
						{favoritos.map((elem, iterador) => {
							console.log(favoritos);
							let etiqueta;
							if (elem.publicaciones.formato == "image") {
								etiqueta = (
									<Link to={"/detalle/" + elem.publicaciones.id}>
										<img className="rounded" src={elem.publicaciones.url} alt="" />
									</Link>
								);
							} else {
								etiqueta = <video className="rounded" src={elem.publicaciones.url} alt="" controls />;
							}
							return (
								<div className="col-md-4 col-6 mb-3 " key={iterador}>
									<div className="" id="contenedor">
										{etiqueta}
										<div className="row d-flex justify-content-start px-4 px-md-0 pl-md-2">
											<div className="col-xs-4" id="botonCentrar">
												<div className="btn-group dropdown">
													<button
														type="button"
														className="btn btn-secondary btn-sm bg-transparent border-0 rounded"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false">
														<i className="fas fa-ellipsis-h" />
													</button>
													<div className="dropdown-menu bg-transparent border-0 p-0">
														<div className="row d-flex">
															<div className="col-2">
																<i
																	className="fas fa-trash-alt text-white"
																	type="button"
																	onClick={() => eliminar(elem.id)}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xs-8">
												<div id="footerImagen" className=" text-white py-1">
													<p className="">{elem.publicaciones.titulo}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Masonry>
				</div>
			</div>
			<div>{modal}</div>
		</div>
	);
};
