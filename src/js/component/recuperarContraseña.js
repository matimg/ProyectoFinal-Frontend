import React from "react";
import { Link } from "react-router-dom";
import "../../styles/recuperarContraseña.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const RecuperarContraseña = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm();
	const onSubmit = data => console.log(data);

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
						<button type="submit" className="btn btn-block botonRecuperar mt-4 mb-2">
							Enviar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
