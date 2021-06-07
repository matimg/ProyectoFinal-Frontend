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
export const CambiarDatosPerfil = e => {
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
