import React, { useContext, useState, useEffect } from "react";
import "../../styles/perfil.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CambiarDatosPerfil } from "../component/cambiarDatosPerfil";
import Swal from "sweetalert2";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	let usuario = JSON.parse(localStorage.getItem("usuario"));
	const [modal, setModal] = useState("");
	const [publicaciones, setPublicaciones] = useState([]);
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

	const fetchPublicaciones = async () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", sessionStorage.getItem("token"));

		var requestOptions = {
			method: "GET",
			headers: myHeaders
		};

		try {
			const res = await fetch(process.env.URL + "/usuarios/publicaciones", requestOptions);
			const data = await res.json();
			console.log(data);
			setPublicaciones(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPublicaciones();
	}, []);

	const llamar = async id => {
		let resultado = await actions.eliminarPublicacion(id);
		if (resultado == "ok") {
			Swal.fire("Eliminado correctamente", "", "success");
			fetchPublicaciones();
		} else {
			alert("Se rompio");
		}
	};

	const eliminar = id => {
		Swal.fire({
			title: "¿Está seguro que desea eliminar esta publicación?",
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

	return (
		<div className="row p-0 mx-1 d-flex justify-content-center align-items-center cuerpoPerfil ">
			<div
				id="perfil"
				style={{ height: "440px" }}
				className="col-md-4 col-sm-11 shadow rounded d-flex flex-column align-items-center mt-5 mx-2 py-3 px-2">
				<img
					src="https://i.pinimg.com/474x/83/a9/a1/83a9a144ab03763667b8d8aa381bb441.jpg"
					alt="avatar"
					className="rounded-circle w-25 mb-3"
				/>
				{/* <h5 className="text-white">
					{nombre} {apellido}
				</h5> */}
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
			<div id="publicaciones" className="col-md-7 col-sm-11 p-0 m-0 mt-4 ">
				<div id="publicaciones" className="row m-0 p-0">
					{publicaciones.map((elem, iterador) => {
						console.log(publicaciones);
						return (
							<div className="col-md-4 col-6 mb-3" key={iterador}>
								<div className="">
									<img className="rounded w-100" src={elem.url} alt="" />
									<div
										id="footerImagen"
										className="bg-dark d-flex justify-content-around text-white py-1">
										<i className="fas fa-pen" type="button" onClick={editar} />
										<i
											className="fas fa-trash-alt"
											type="button"
											onClick={() => eliminar(elem.id)}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div>{modal}</div>
		</div>
	);
};
