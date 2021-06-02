import React from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const Registro = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div>
			<div className="modal-dialog modal-dialog-centered">
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
							<button type="submit" className="btn btn-block botonRegistrarme mt-4 mb-2">
								Registrarme
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
