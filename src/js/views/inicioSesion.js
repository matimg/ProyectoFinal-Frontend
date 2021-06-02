import React from "react";
import "../../styles/inicioSesion.scss";
import { Registro } from "../component/registro";
import { RecuperarContraseña } from "../component/recuperarContraseña";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const InicioSesion = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div className="container cuerpoInicio d-flex justify-content-center align-items-center mt-n4">
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
					<button type="submit" className="btn btn-block botonVerdeInicio">
						Ingresar
					</button>
				</form>
				<div className="d-flex justify-content-center">
					<button
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
					<button className="btn botonVerdeSecundario" data-toggle="modal" data-target="#registroModal">
						Registrarme
					</button>
					<div
						className="modal fade"
						id="registroModal"
						aria-labelledby="registroModalLabel"
						aria-hidden="true">
						<Registro />
					</div>
				</div>
			</div>
		</div>
	);
};
