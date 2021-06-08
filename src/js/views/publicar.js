import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormText } from "react-bootstrap";
import "../../styles/publicar.scss";

export const Publicar = () => {
	const { store, actions } = useContext(Context);
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div className="container-sm justify-content-center align-items-center cuerpoPublicar">
			<div className="contenedorPublicar justify-content-center align-items-center rounded">
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label className="fuentePublicar">Título de la publicación</Form.Label>
						<Form.Control type="text" placeholder="Ejemplo: Mi titulo" required />
						<Form.Control.Feedback type="invalid">Ingrese un titulo</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label className="fuentePublicar">Describe tu publicación</Form.Label>
						<Form.Control as="textarea" rows={3} placeholder="Descripcion..." required />
						<Form.Control.Feedback type="invalid">Ingrese una descripción</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Sube tu archivo aquí</Form.Label>
						<Form.Control type="file" required />
						<Form.Control.Feedback type="invalid">Sube un archivo</Form.Control.Feedback>
					</Form.Group>
					<div className="d-flex justify-content-center align-items-center mt-4">
						<Button className="botonPublicar mt-4" size="lg" type="submit">
							Publicar
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};
