import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormText } from "react-bootstrap";
import { Select } from "react-bootstrap";

import "../../styles/publicar.scss";

import { Image, Video } from "cloudinary-react";

export const Publicar = () => {
	const { store, actions } = useContext(Context);
	const [validated, setValidated] = useState(false);

	const publicacion = async () => {
		let result = await actions.publicar(titulo, descripcion, url, categoria);
		console.log(result);
	};
	const publicar = (titulo, descripcion, file, categoria) => {
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "ml_default");
		data.append("cloud_name", "ecomproyecto");
		fetch("https://api.cloudinary.com/v1_1/ecomproyecto/image/upload", {
			method: "post",
			body: data
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				console.log(data.secure_url);
				let url = data.secure_url;

				actions.publicar(titulo, descripcion, url, categoria);
			})
			.catch(err => console.log(err));
	};
	const handleSubmit = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		let titulo = form.titulo.value;
		let descripcion = form.descripcion.value;
		let file = form.url.files[0];
		let categoria = form.categoria.value;
		setValidated(true);
		publicar(titulo, descripcion, file, categoria);
	};

	return (
		<div className="container-sm justify-content-center align-items-center cuerpoPublicar">
			<div className="contenedorPublicar justify-content-center align-items-center rounded">
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className="" controlId="titulo">
						<Form.Label className="fuentePublicar">Título de la publicación</Form.Label>
						<Form.Control type="text" placeholder="Ejemplo: Mi titulo" required />
						<Form.Control.Feedback type="invalid">Ingrese un titulo</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="" controlId="descripcion">
						<Form.Label className="fuentePublicar">Describe tu publicación</Form.Label>
						<Form.Control as="textarea" rows={3} placeholder="Descripcion..." required />
						<Form.Control.Feedback type="invalid">Ingrese una descripción</Form.Control.Feedback>
					</Form.Group>
					<div className="row">
						<div className="col">
							<Form.Group style={{ height: "150px" }} controlId="url" className="mb-3">
								<Form.Label>Sube tu archivo aquí</Form.Label>
								<Form.Control type="file" className="border-dark" required />
								<Form.Control.Feedback type="invalid">Sube un archivo</Form.Control.Feedback>
							</Form.Group>
						</div>
						<div className="col">
							<Form.Control as="select" id="categoria">
								<option>Elije el tipo de contenido</option>
								<option value="Video">Video</option>
								<option value="Image">Imagen</option>
								<option value="Sonido">Sonido</option>
							</Form.Control>
						</div>
					</div>
					<div className="d-flex justify-content-center align-items-center mt-4">
						<Button className="botonPublicar mt-4 bg-none" size="lg" type="submit">
							Publicar
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};
