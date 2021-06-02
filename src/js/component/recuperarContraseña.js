import React from "react";
import { Link } from "react-router-dom";
import "../../styles/recuperarContraseña.scss";

export const RecuperarContraseña = () => {
	return (
		<div>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title text-center">Recuperar contraseña</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									placeholder="Email"
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
		</div>
	);
};
