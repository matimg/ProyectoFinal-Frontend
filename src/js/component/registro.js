import React, { useContext, useState, useRef, useEffect } from "react";
var segundoModal = "d-none";
import { Link, useHistory } from "react-router-dom";
import "../../styles/registro.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Context } from "../store/appContext";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { ModalBody } from "react-bootstrap";
import { ModalDialog } from "react-bootstrap";
import { ModalFooter } from "react-bootstrap";
import { ModalTitle } from "react-bootstrap";
import { ModalHeader } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormText } from "react-bootstrap";

import PropTypes from "prop-types";
export const Registro = e => {
	const props = e;
	const [show, setShow] = useState(props.habilitar);
	const [validated, setValidated] = useState(false);
	const { store, actions } = useContext(Context);

	const handleSubmit = async event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (form.password.value !== form.confirmPassword.value) {
			form.confirmPassword.value = "";
			event.preventDefault();
			event.stopPropagation();
		}
		if (form.fechaNacimiento.value > "2000-01-02") {
			form.fechaNacimiento.value = "";
			event.preventDefault();
			event.stopPropagation();
		}
		actions.crearUsuario(
			form.nombre.value,
			form.apellido.value,
			form.fechaNacimiento.value,
			form.email.value,
			form.password.value
		);
		setValidated(true);
	};

	const handleClose = () => {
		props.funcion();
		setShow(false);
	};
	// const handleShow = () => setShow(true);

	return (
		<>
			{/* <div className="d-flex justify-content-start align-items-center"> */}
			<div className="container-sm justify-content-center align-items-center">
				<Modal centered show={show} onHide={() => handleClose()}>
					<Modal.Header closeButton>
						<Modal.Title>Registrarme</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<div className="row">
								<div className="col p-0 ml-3">
									<Form.Group className="mb-3" controlId="nombre">
										<Form.Control type="text" placeholder="Nombre" required />
									</Form.Group>
								</div>
								<div className="col">
									<Form.Group className="mb-3" controlId="apellido">
										<Form.Control type="text" placeholder="Apellido" required />
									</Form.Group>
								</div>
							</div>
							<Form.Group className="mb-3" controlId="fechaNacimiento">
								<Form.Control type="date" placeholder="Fecha de nacimiento" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="email">
								<Form.Control type="email" placeholder="Email" required />
								<Form.Control.Feedback type="invalid">Ingrese un correo válido</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3" controlId="password">
								<Form.Control type="password" placeholder="Contraseña" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="confirmPassword">
								<Form.Control type="password" placeholder="Repetir contraseña" required />
								<Form.Control.Feedback type="invalid">
									Las contraseñas no coinciden
								</Form.Control.Feedback>
							</Form.Group>
							<div className="d-flex justify-content-center align-items-center mt-4">
								<Button className="botonRegistrarme pl-4 pr-4 p-2" type="submit">
									Registrarme
								</Button>
							</div>
						</Form>
					</Modal.Body>
				</Modal>
				{/* </div> */}
			</div>
		</>
	);
};

// export const Registro = () => {
// 	const { store, actions } = useContext(Context);
// 	const [registrar, setRegistrar] = useState("");
// 	// const [segundoModal, setSegundoModal] = useState("d-none");
// 	const [fondoFecha, setFondoFecha] = useState("");
// 	const [fondoContraseña, setFondoContraseña] = useState("");

// 	const {
// 		register,
// 		formState: { errors },
// 		handleSubmit
// 	} = useForm();

// 	const onSubmit = data => {
// 		if (data.Contraseña === data.Repetircontraseña && data.Fechanacimiento < "2003-01-02") {
// 			actions.crearUsuario(data.Nombre, data.Apellido, data.Fechanacimiento, data.Email, data.Contraseña);
// 			// setSegundoModal("");
// 			segundoModal = "";
// 			CloseModal();
// 		} else {
// 			if (data.Contraseña !== data.Repetircontraseña) {
// 				setFondoContraseña(" errvalidacion");
// 			} else {
// 				setFondoContraseña("");
// 			}
// 			if (data.Fechanacimiento > "2003-01-02") {
// 				setFondoFecha(" errvalidacion");
// 			} else {
// 				setFondoFecha("");
// 			}
// 		}
// 	};

// 	function showModal() {
// 		document.getElementById("primerModal").style.display = "block";
// 	}

// 	function CloseModal() {
// 		document.getElementById("primerModal").style.display = "none";
// 	}

// 	return (
// 		<div>
// 			<div className={"modal-dialog modal-dialog-centered " + registrar} id="primerModal">
// 				<div className="modal-content">
// 					<div className="modal-header">
// 						<h3 className="modal-title text-center">Registrarme</h3>
// 						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 							<span aria-hidden="true">&times;</span>
// 						</button>
// 					</div>
// 					<div className="modal-body">
// 						<form onSubmit={handleSubmit(onSubmit)}>
// 							<div className="form-group">
// 								<div className="row">
// 									<div className="col">
// 										<input
// 											type="text"
// 											className={"form-control" + (!errors.Nombre ? " " : " errvalidacion")}
// 											placeholder="Nombre"
// 											{...register("Nombre", { required: true })}
// 										/>
// 									</div>
// 									<div className="col">
// 										<input
// 											type="text"
// 											className={"form-control" + (!errors.Apellido ? " " : " errvalidacion")}
// 											placeholder="Apellido"
// 											{...register("Apellido", { required: true })}
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="form-group">
// 								<input
// 									type="date"
// 									name="entry_date"
// 									className={
// 										"form-control" + (!errors.Fechanacimiento ? " " : " errvalidacion") + fondoFecha
// 									}
// 									id="entry_date"
// 									placeholder="Fechanacimiento"
// 									{...register("Fechanacimiento", { required: true })}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<input
// 									type="email"
// 									className={"form-control" + (!errors.Email ? " " : " errvalidacion")}
// 									id="exampleInputEmail1"
// 									placeholder="Email"
// 									{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
// 									aria-describedby="emailHelp"
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<input
// 									type="password"
// 									className={"form-control" + (!errors.Contraseña ? " " : " errvalidacion")}
// 									id="exampleInputPassword1"
// 									placeholder="Contraseña"
// 									{...register("Contraseña", { required: true })}
// 								/>
// 								<input
// 									type="password"
// 									className={
// 										"form-control mt-3" +
// 										(!errors.Repetircontraseña ? " " : " errvalidacion") +
// 										fondoContraseña
// 									}
// 									id="exampleInputPassword1"
// 									placeholder="Repetir contraseña"
// 									{...register("Repetircontraseña", { required: true })}
// 								/>
// 							</div>
// 							<button
// 								type="submit"
// 								className="btn btn-block botonRegistrarme mt-4 mb-2"
// 								data-target="#usuarioCreadoModal"
// 								data-toggle="modal">
// 								Registrarme
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 			<div className={"modal-dialog modal-dialog-centered " + segundoModal}>
// 				<div
// 					className="modal fade m-0"
// 					id="usuarioCreadoModal"
// 					aria-labelledby="usuarioCreadoModalLabel"
// 					aria-hidden="true">
// 					<div className="modal-dialog modal-dialog-centered">
// 						<div className="modal-content">
// 							<div className="modal-body">
// 								<div className="card text-center">
// 									<div className="card-body">
// 										<h5 className="card-title">Usuario registrado</h5>
// 										<p className="card-text">Verifique su casilla de correo</p>
// 									</div>
// 									<div className="card-footer text-muted">
// 										<Link
// 											to="/"
// 											className="btn botonRegistrarme"
// 											data-dismiss="modal"
// 											id=""
// 											aria-label="Close">
// 											Volver
// 										</Link>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
