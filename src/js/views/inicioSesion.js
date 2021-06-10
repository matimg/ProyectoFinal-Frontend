import React, { useState, useContext } from "react";
import "../../styles/inicioSesion.scss";
import { Registro } from "../component/registro";
import { RecuperarContraseña } from "../component/recuperarContraseña";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const InicioSesion = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();

	const onSubmit = async data => {
		let result = await actions.login(data.email, data.password);
		console.log(result);
		console.log(store.usuario);
		if (result == "ok") history.push("/perfilVendedor");
	};
	const [mostrarRegistro, setMostrarRegistro] = useState("d-none");
	const [modalRegistro, setModalRegistro] = useState("");

	const mostrarModal = () => {
		setMostrarRegistro(" ");
		setModalRegistro(<Registro habilitar={true} funcion={escucharRegistro} />);
	};

	function escucharRegistro() {
		setModalRegistro("");
	}

	return (
		<div className="container cuerpoInicio d-flex justify-content-center align-items-center mt-n4">
			<div className={"alert alert-danger" + store.errorLogin.style} role="alert">
				{store.errorLogin.mensaje}
			</div>
			<div className="container bg-white rounded cardInicio card" style={{ width: "350px" }}>
				<h3 className="text-center mt-4 mb-3">Iniciar sesión</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<input
							type="email"
							className={"form-control mt-4" + (!errors.email ? " " : " errvalidacion")}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Ingresa tu email"
							{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
						/>
						{/*{errors.email && <p>Ingrese su email</p>}*/}
					</div>
					<div className="form-group">
						<input
							type="password"
							className={"form-control" + (!errors.password ? " " : " errvalidacion")}
							id="exampleInputPassword1"
							placeholder="Ingresa tu contraseña"
							{...register("password", { required: true })}
						/>
					</div>
					<button type="submit" id="botonVerdeInicio" className="btn btn-block botonVerdeInicio">
						Ingresar
					</button>
				</form>
				<div className="d-flex justify-content-center align-items-center">
					<button
						id="olvidasteContraseña"
						className="btn border-0 btn-sm olvidasteContraseña"
						data-toggle="modal"
						data-target="#recuperarModal">
						¿Olvidaste tu contraseña?
					</button>
					<div
						className="modal fade"
						id="recuperarModal"
						aria-labelledby="recuperarModalLabel"
						aria-hidden="true">
						<RecuperarContraseña />
					</div>
				</div>
				<div className="card-footer d-flex justify-content-center mt-4">
					<button
						onClick={mostrarModal}
						id="botonVerdeSecundario"
						className="btn botonVerdeSecundario"
						data-toggle="modal"
						data-target="#registroModal">
						Registrarme
					</button>
				</div>
			</div>
			<div className={mostrarRegistro}>{modalRegistro}</div>
		</div>
	);
};
