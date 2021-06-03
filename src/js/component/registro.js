import React, { useContext, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/registro.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Context } from "../store/appContext";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [registrar, setRegistrar] = useState("");
	const [finalizar, setFinalizar] = useState("d-none");
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();
	const onSubmit = data => {
		actions.crearUsuario(data.Nombre, data.Apellido, data.Fechanacimiento, data.Email, data.Contraseña);
		setRegistrar("d-none");
		setFinalizar("");
	};

	return (
		<div>
			<div className={"modal-dialog modal-dialog-centered " + registrar}>
				<div className="modal-content">
					<div className="modal-header">
						<h3 className="modal-title text-center">Registrarme</h3>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-group">
								<div className="row">
									<div className="col">
										<input
											type="text"
											className={"form-control" + (!errors.Nombre ? " " : " errvalidacion")}
											placeholder="Nombre"
											{...register("Nombre", { required: true })}
										/>
									</div>
									<div className="col">
										<input
											type="text"
											className={"form-control" + (!errors.Apellido ? " " : " errvalidacion")}
											placeholder="Apellido"
											{...register("Apellido", { required: true })}
										/>
									</div>
								</div>
							</div>
							<div className="form-group">
								<input
									type="date"
									name="entry_date"
									className={"form-control" + (!errors.Fechanacimiento ? " " : " errvalidacion")}
									id="entry_date"
									placeholder="Fechanacimiento"
									{...register("Fechanacimiento", { required: true })}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className={"form-control" + (!errors.Email ? " " : " errvalidacion")}
									id="exampleInputEmail1"
									placeholder="Email"
									{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className={"form-control" + (!errors.Contraseña ? " " : " errvalidacion")}
									id="exampleInputPassword1"
									placeholder="Contraseña"
									{...register("Contraseña", { required: true })}
								/>
								<input
									type="password"
									className={
										"form-control mt-3" + (!errors.Repetircontraseña ? " " : " errvalidacion")
									}
									id="exampleInputPassword1"
									placeholder="Repetir contraseña"
									{...register("Repetircontraseña", { required: true })}
								/>
							</div>
							<button
								type="submit"
								className="btn btn-block botonRegistrarme mt-4 mb-2"
								data-target="#usuarioCreadoModal"
								data-toggle="modal">
								Registrarme
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className={"modal-dialog modal-dialog-centered " + finalizar}>
				<div
					className="modal fade"
					id="usuarioCreadoModal"
					aria-labelledby="usuarioCreadoModalLabel"
					aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-body">
								<div className="card text-center">
									<div className="card-body">
										<h5 className="card-title">Usuario registrado</h5>
										<p className="card-text">Verifique su casilla de correo</p>
									</div>
									<div className="card-footer text-muted">
										<Link
											to="/"
											className="btn botonRegistrarme"
											data-dismiss="modal"
											aria-label="Close">
											Volver
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
