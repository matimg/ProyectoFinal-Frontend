import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/recuperarContraseña.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const RecuperarContraseña = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();

	const mensajeError = tipoError => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: tipoError,
			confirmButtonColor: "#de6a6a"
		});
	};

	const mensajeOk = () => {
		Swal.fire({
			icon: "success",
			title: "Verifique su casilla de correos",
			text: "Le enviamos su nueva contraseña",
			confirmButtonColor: "#7bffc6"
		});
	};

	const onSubmit = async data => {
		//data = {email: "email"}
		console.log(data);
		const resultado = await actions.recuperarPassword(data.Email);
		if (resultado == "ok") {
			mensajeOk();
		} else {
			mensajeError(resultado);
		}
	};
	return (
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title text-center">Recuperar contraseña</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form onSubmit={handleSubmit(onSubmit)}>
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
						<button type="submit" className="btn btn-block mt-4 mb-2" id="botonRecuperar">
							Enviar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
