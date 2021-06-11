import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormText } from "react-bootstrap";
import { Select } from "react-bootstrap";
import Swal from "sweetalert2";

import "../../styles/publicar.scss";

import { Image, Video } from "cloudinary-react";
import { Spinner } from "../component/spinner";

export const Publicar = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [validated, setValidated] = useState(false);
	const [spinner, setSpinner] = useState("d-none");
	const [opacidadPublicar, setOpacidadPublicar] = useState("1");
	const [opacidadSpinner, setOpacidadSpinner] = useState("0");

	const mensajeError = tipoError => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: tipoError
		});
	};

	const mensajeOk = () => {
		Swal.fire({
			icon: "success",
			title: "Su publicacion ha sido realizada",
			// customClass: { cancelButton: "btn botonCancelar", confirmButton: "btn botonConfirmar" },
			showCancelButton: true,
			// buttonsStyling: false,
			confirmButtonColor: "#7bffc6",
			cancelButtonColor: "#de6a6a",
			confirmButtonText: "Volver al inicio",
			cancelButtonText: `Cancelar`
		}).then(result => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				history.push("/feed");
			}
		});
	};

	const llamarPublicar = async (titulo, descripcion, url, categoria, tipo) => {
		let resultado = await actions.publicar(titulo, descripcion, url, categoria, tipo);
		console.log("resultado", resultado);
		if (resultado == "ok") {
			mensajeOk();
		} else {
			mensajeError("Hay problemas con la conexion, vuelva a intentarlo mas tarde");
		}
	};
	const saberFormato = tipo => {
		let i = 0;
		let sigo = true;
		let aux = "";
		let cat = "";
		while (sigo == true) {
			aux = tipo.charAt(i);
			console.log("Entra");
			if (aux === "/" || i >= 10) sigo = false;
			else {
				cat = cat + aux;
			}
			i++;
		}
		return cat;
	};
	const publicar = (titulo, descripcion, file, categoria) => {
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "ml_default");
		data.append("cloud_name", "ecomproyecto");
		console.log(file);
		let tipo = file.type;
		if (tipo == "") {
			mensajeError("La plataforma no soporta este formato");
		} else {
			tipo = saberFormato(tipo);
			console.log("tipo cambiado:", tipo);
			if (tipo == "image" || tipo == "video") {
				actions.activarSpinner(true);
				fetch(process.env.CLOUD + "/" + tipo + "/upload", {
					method: "post",
					body: data
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						console.log(data.secure_url);
						let url = data.secure_url;
						llamarPublicar(titulo, descripcion, url, categoria, tipo);
					})
					.catch(err => {
						console.log(err);
						actions.activarSpinner(false);
					});
			} else {
				mensajeError("La plataforma no soporta este formato");
			}
		}
	};
	const handleSubmit = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			let titulo = form.titulo.value;
			let descripcion = form.descripcion.value;
			let file = form.url.files[0];
			let categoria = form.categoria.value;
			publicar(titulo, descripcion, file, categoria);
		}
		setValidated(true);
	};

	useEffect(
		() => {
			console.log("entra", store.loading);
			if (store.loading) {
				setSpinner(<Spinner className={spinner} />);
				setOpacidadPublicar("0.5");
			} else {
				console.log("falso", spinner);
				setSpinner("");
				setOpacidadPublicar("1");
			}
		},
		[store.loading]
	);

	return (
		<div
			style={{ opacity: opacidadPublicar }}
			className="container-sm justify-content-center align-items-center cuerpoPublicar">
			<div className="contenedorPublicar justify-content-center align-items-center rounded">
				{spinner}
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
					<div className="row ">
						<div className="col-12 col-md-6">
							<Form.Control as="select" id="categoria">
								<option>Elije el tipo de contenido</option>
								<option value="Video">Video</option>
								<option value="Image">Imagen</option>
								<option value="Sonido">Sonido</option>
							</Form.Control>
						</div>
						<div className="col-12 col-md-6 mt-md-1 mt-sm-3 mt-3 ">
							<Form.Group style={{ height: "150px" }} controlId="url" className="mb-3">
								<Form.Control type="file" className="border-dark" required />
								<Form.Control.Feedback type="invalid">Sube un archivo</Form.Control.Feedback>
							</Form.Group>
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
