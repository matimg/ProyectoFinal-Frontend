import React, { useContext, useState, useRef, useEffect } from "react";
var segundoModal = "d-none";
import { Link, useHistory } from "react-router-dom";
import "../../styles/perfilVendedor.scss";
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

import Swal from "sweetalert2";

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
		event.preventDefault();
		if (form.nombre.value == "") {
			form.nombre.value = nombre;
		}
		if (form.apellido.value == "") {
			form.apellido.value = apellido;
		}
		if (form.passNueva.value !== form.passNueva2.value) {
			Swal.fire({
				icon: "error",
				title: "Las contraseñas no coinciden",
				showConfirmButton: true,
				confirmButtonColor: "#7bffc6"
			});
		} else {
			let result = await actions.modificarDatos(form.nombre.value, form.apellido.value, form.passNueva.value);
			if (result == "ok") {
				if (form.passNueva.value !== "") {
					Swal.fire({
						icon: "success",
						title: "La contraseña fue cambiada con éxito",
						showConfirmButton: true,
						confirmButtonColor: "#7bffc6"
					});
				}
				props.funcion();
				setShow(false);
			} else {
				alert("Algo salio mal!");
			}
		}
	};

	const handleClose = () => {
		props.funcion();
		setShow(false);
	};

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
								<Form.Control type="text" placeholder={nombre} />
							</Form.Group>
							<Form.Group className="mb-3" controlId="apellido">
								<Form.Control type="text" placeholder={apellido} />
							</Form.Group>

							{/* PASSWORD */}
							<Form.Group className="mb-3" controlId="passNueva">
								<Form.Control type="password" placeholder="Nueva contraseña" required />
								<Form.Control.Feedback type="invalid">
									Las contraseñas no coinciden
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3" controlId="passNueva2">
								<Form.Control type="password" placeholder="Repetir nueva contraseña" required />
							</Form.Group>
							<div className="d-flex justify-content-center align-items-center mt-4">
								<Button id="botonCambios" className="pl-4 pr-4 p-2" type="submit">
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
