import React, { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CambiarDatosPerfil } from "../component/cambiarDatosPerfil";

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

	useEffect(() => {
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
		fetchPublicaciones();
	}, []);

	return (
		<div className="row p-0 mx-1">
			<div
				id="perfil"
				style={{ height: "350px" }}
				className="col-md-4 col-sm-11 shadow rounded bg-primary d-flex flex-column align-items-center mt-5 mx-2 py-3 px-2">
				<img
					src="https://i.pinimg.com/474x/83/a9/a1/83a9a144ab03763667b8d8aa381bb441.jpg"
					alt="avatar"
					className="rounded-circle w-25"
				/>
				<h5 className="text-white">
					{nombre} {apellido}
				</h5>
				<div id="datos" className="w-75 text-center">
					<div className="bg-secondary my-2">{nombre}</div>
					<div className="bg-secondary my-2">{apellido}</div>
					<div className="bg-secondary my-2">{fecha}</div>
					<div className="bg-secondary my-2">{email}</div>
				</div>
				<button onClick={mostrarModal} className="btn btn-secondary mt-2">
					Editar perfil
				</button>
			</div>
			<div id="publicaciones" className="col-md-7 col-sm-11 p-0 m-0 mt-5">
				<div id="publicaciones" className="row m-0 p-0">
					{publicaciones.map((elem, iterador) => {
						console.log(publicaciones);
						return (
							<div className="col-md-4 col-6" key={iterador}>
								<img className="rounded w-100 my-2" src={elem.url} alt="" />
							</div>
						);
					})}
					{/*<div className="col-md-4 col-6">
                        <img
                            className="rounded w-100 my-2"
                            src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-md-4 col-6">
                        <img
                            className="rounded w-100 my-2"
                            src="https://images.theconversation.com/files/254114/original/file-20190116-163292-1fq0u27.jpg?ixlib=rb-1.1.0&rect=2%2C0%2C1914%2C1514&q=45&auto=format&w=496&fit=clip"
                            alt=""
                        />
                    </div>
                    <div className="col-md-4 col-6">
                        <img
                            className="rounded w-100 my-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJJrtk2k_UxsBaDd2pw_f3HvWvRHHU3N61A&usqp=CAU"
                            alt=""
                        />
                    </div>

                    <div className="col-md-4 col-6">
                        <img
                            className="rounded w-100 my-2"
                            src="https://images.theconversation.com/files/254114/original/file-20190116-163292-1fq0u27.jpg?ixlib=rb-1.1.0&rect=2%2C0%2C1914%2C1514&q=45&auto=format&w=496&fit=clip"
                            alt=""
                        />
                    </div>

                    <div className="col-md-4 col-6">
                        <img
                            className="rounded w-100 my-2"
                            src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
                            alt=""
                        />
                    </div>

                    <div className="col-md-4 col-6">
                        <img
                            className="rounded w-100 my-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJJrtk2k_UxsBaDd2pw_f3HvWvRHHU3N61A&usqp=CAU"
                            alt=""
                        />
                </div>*/}
				</div>
			</div>
			<div>{modal}</div>
		</div>
	);
};
