import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/recuperarContraseña.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
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

export const RecuperarContraseña = e => {
	const props = e;
	console.log(props);
	const [show, setShow] = useState(props.habilitar);
	const [validated, setValidated] = useState(false);
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const mensajeError = tipoError => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: tipoError,
			confirmButtonColor: "#de6a6a",
			confirmButton: true,
			confirmButtonText: "Ok"
		}).then(result => {
			if (result.isConfirmed) {
				history.push("/");
			}
		});
	};

	const mensajeOk = () => {
		Swal.fire({
			icon: "success",
			title: "Verifique su casilla de correos",
			text: "Le enviamos su nueva contraseña",
			confirmButtonColor: "#7bffc6",
			confirmButton: true,
			confirmButtonText: "Ok"
		}).then(result => {
			if (result.isConfirmed) {
				props.funcion();
				history.push("/");
			}
		});
	};

	// const handleSubmit = async data => {
	// 	//data = {email: "email"}
	// 	console.log(data);
	// 	const resultado = await actions.recuperarPassword(data.Email);
	// 	if (resultado == "ok") {
	// 		props.funcion();
	// 		setShow(false);
	// 		mensajeOk();
	// 	} else {
	// 		mensajeError(resultado);
	// 	}
	// 	setValidated(true);
	// };
	const handleSubmit = async event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		console.log(form.Email.value);
		const resultado = await actions.recuperarPassword(form.Email.value);
		if (resultado == "ok") {
			mensajeOk();
			props.funcion();
			setShow(false);
		} else {
			mensajeError(resultado);
			props.funcion();
			setShow(false);
		}
		setValidated(true);
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
						<Modal.Title>Recuperar contraseña</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form noValidate validated={validated} onSubmit={() => handleSubmit(event)}>
							<Form.Group className="mb-3" controlId="Email">
								<Form.Control type="text" placeholder="Email" required />
								<Form.Control.Feedback type="invalid">Ingresa un email</Form.Control.Feedback>
							</Form.Group>
							<div className="d-flex justify-content-center align-items-center mt-4">
								<Button id="botonRegistrarme" className="pl-4 pr-4 p-2" type="submit">
									Enviar
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
