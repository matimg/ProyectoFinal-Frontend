import React from "react";
import "../../styles/inicioSesion.scss";

export const InicioSesion = () => (
	<div className="container cuerpoInicio d-flex justify-content-center align-items-center mt-n4">
		<div className="container bg-white rounded cardInicio card" style={{ width: "350px" }}>
			<h3 className="text-center mt-4 mb-3">Iniciar sesión</h3>
			<form>
				<div className="form-group">
					<input
						type="email"
						className="form-control mt-4"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Ingresa tu email"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Ingresa tu contraseña"
					/>
				</div>
				<button type="submit" className="btn btn-block botonVerdeInicio">
					Ingresar
				</button>
			</form>
			<div className="d-flex justify-content-center">
				<button className="btn border-0 btn-sm">¿Olvidaste tu contraseña?</button>
			</div>
			<div className="card-footer d-flex justify-content-center mt-4">
				<button className="btn botonVerdeSecundario" data-toggle="modal" data-target="#exampleModal">
					Registrarme
				</button>
				<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
