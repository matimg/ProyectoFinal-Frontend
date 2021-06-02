import React from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";

export const Registro = () => {
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
						<form>
							<div className="form-group">
								<div className="row">
									<div className="col">
										<input type="text" className="form-control" placeholder="Nombre" />
									</div>
									<div className="col">
										<input type="text" className="form-control" placeholder="Apellido" />
									</div>
								</div>
							</div>
							<div className="form-group">
								<input type="date" name="entry_date" className="form-control" id="entry_date" />
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									placeholder="Email"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Contraseña"
								/>
								<input
									type="password"
									className="form-control mt-3"
									id="exampleInputPassword1"
									placeholder="Repetir contraseña"
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
