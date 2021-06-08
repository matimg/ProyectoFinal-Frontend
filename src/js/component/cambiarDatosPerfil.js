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
	console.log(props);
	const [show, setShow] = useState(props.habilitar);
	const [validated, setValidated] = useState(false);

	const usuario = JSON.parse(localStorage.getItem("usuario")); //Traemos los datos

	const [nombre, setNombre] = useState(usuario.nombre);
	const [apellido, setApellido] = useState(usuario.apellido);
	const [fecha, setFecha] = useState(usuario.fecha);

	const { store, actions } = useContext(Context);

	const handleSubmit = async event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (form.nombre.value == "") {
			event.preventDefault();
			form.nombre.value = nombre;
		}
		if (form.apellido.value == "") {
			event.preventDefault();
			form.apellido.value = apellido;
		}
		let result = await actions.modificarDatos(form.nombre.value, form.apellido.value);
		if (result == "ok") {
			props.funcion();
			setShow(false);
		} else {
			alert("Algo salio mal!");
		}
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
						<Modal.Title>Cambiar datos</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="nombre">
								<Form.Control type="text" placeholder={nombre} required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="apellido">
								<Form.Control type="text" placeholder={apellido} required />
							</Form.Group>
							<div className="d-flex justify-content-center align-items-center mt-4">
								<Button className="botonRegistrarme pl-4 pr-4 p-2" type="submit">
									Confirmar cambios
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
