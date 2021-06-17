const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tipoUsuario: "",
			errorLogin: { mensaje: "", style: " d-none" },
			loading: false,
			cantFechtPublicaciones: 0,
			token: false
		},

		actions: {
			activarSpinner: estado => {
				setStore({ loading: estado });
			},

			rolUsuario: rol => {
				setStore({ tipoUsuario: rol });
			},
			crearUsuario: async (nombre, apellido, fechaNacimiento, email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre,
					apellido: apellido,
					fechaNacimiento: fechaNacimiento,
					email: email,
					password: password,
					tipoUsuario: getStore().tipoUsuario
				});

				console.log(raw);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const fetchUsuario = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/registro", requestOptions);
						const data = await res.json();
						console.log(data);
						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						} else {
							setStore({ loading: false });
							return "ok";
						}
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				let resultado = fetchUsuario();
				return resultado;
			},
			activarUsuario: id => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "PUT",
					headers: myHeaders
				};
				const fetchActivarUsuario = async id => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/verificar/" + id, requestOptions);
						const data = await res.json();

						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						}
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				const resultado = fetchActivarUsuario(id);
				return resultado;
			},
			login: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				console.log(raw);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				const fetchLogin = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/login", requestOptions);
						const data = await res.json();

						if (data.message != "Ok") {
							let newObject = {
								mensaje: data.message,
								style: ""
							};
							setStore({ errorLogin: newObject });
							setStore({ loading: false });
							return "error";
						}
						sessionStorage.setItem("token", data.token);
						setStore({ token: true });
						let usuario = data.usuario;
						let fecha = "";
						for (let i = 0; i < 10; i++) {
							fecha += usuario.fechaNacimiento.charAt(i);
						}
						console.log(fecha);
						usuario.fechaNacimiento = fecha;
						localStorage.setItem("usuario", JSON.stringify(usuario));
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				let result = fetchLogin();
				return result;
			},
			logout: () => {
				sessionStorage.removeItem("token");
				localStorage.removeItem("usuario");
				setStore({ token: false });
			},
			recuperarPassword: email => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw
				};

				const fetchRecuperarPassword = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/recuperar", requestOptions);
						const data = await res.json();
						if (data.message != "Ok") {
							setStore({ loading: false });
							return data.message;
						}
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "Hay problemas con la conexión, vuelva a intentarlo más tarde";
					}
				};
				let resultado = fetchRecuperarPassword();
				return resultado;
			},
			modificarDatos: (nombre, apellido, pass) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({
					nombre: nombre,
					apellido: apellido,
					password: pass
				});

				console.log(raw);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw
				};

				const fetchEditarUsuario = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/usuarios", requestOptions);
						const data = await res.json();
						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						}
						let usuario = JSON.parse(localStorage.getItem("usuario"));
						usuario.nombre = data.usuario.nombre;
						usuario.apellido = data.usuario.apellido;

						localStorage.setItem("usuario", JSON.stringify(usuario));
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				let result = fetchEditarUsuario();
				return result;
			},
			eliminarPublicacion: id => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				const fetchEliminarPublicacion = async id => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/usuarios/publicaciones/" + id, requestOptions);
						const data = await res.json();
						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						}
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				let result = fetchEliminarPublicacion(id);
				return result;
			},
			publicar: (titulo, descripcion, url, categoria, tipo) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({
					titulo: titulo,
					descripcion: descripcion,
					url: url,
					categoria: categoria,
					formato: tipo
				});

				console.log(raw);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				const fetchPublicar = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/usuarios/publicaciones", requestOptions);
						const data = await res.json();

						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						}
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				let result = fetchPublicar();
				return result;
			},
			agregarFavorito: async idPublicacion => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({
					idPublicacion: idPublicacion
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};
				const fetchAgregarFavorito = async () => {
					try {
						const res = await fetch(process.env.URL + "/favorito", requestOptions);
						const data = await res.json();
						return "ok";
					} catch (error) {
						console.log(error);
						return "error";
					}
				};
				const result = fetchAgregarFavorito();
				return result;
			},
			getFavoritos: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};
				const fetchFavoritos = async () => {
					try {
						const res = await fetch(process.env.URL + "/favoritos", requestOptions);
						const data = await res.json();
						console.log(data);
						return data;
						// setFavoritos(data);
					} catch (error) {
						console.log(error);
						return "error";
					}
				};
				const resultado = fetchFavoritos();
				return resultado;
			},
			eliminarFavorito: id => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				const fetchEliminarFavorito = async id => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/favorito/" + id, requestOptions);
						const data = await res.json();
						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						}
						setStore({ loading: false });
						return "ok";
					} catch (error) {
						console.log(error);
						setStore({ loading: false });
						return "error";
					}
				};
				let result = fetchEliminarFavorito(id);
				return result;
			},
			enviarMensaje: (idReceptor, mensaje, asunto) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({
					receptor: idReceptor,
					asunto: asunto,
					mensaje: mensaje
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};
				const fetchEnviar = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/mensaje", requestOptions);
						const data = await res.json();
						setStore({ loading: false });
						return data;
					} catch (error) {
						console.log(error);
						return "error";
					}
				};
				const result = fetchEnviar();
				return result;
			},
			getConversacion: idReceptor => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};
				const fetchConversacion = async idReceptor => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/mensajes/" + idReceptor, requestOptions);
						const data = await res.json();
						setStore({ loading: false });
						return data;
					} catch (error) {
						console.log(error);
						return "error";
					}
				};
				const result = fetchConversacion(idReceptor);
				return result;
			},
			getCasilla: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};
				const fetchCasilla = async () => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/casilla", requestOptions);
						const data = await res.json();
						setStore({ loading: false });
						return data;
					} catch (error) {
						console.log(error);
						return "error";
					}
				};
				const result = fetchCasilla();
				return result;
			},
			getDetalle: id => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};
				const fetchDetalle = async id => {
					try {
						setStore({ loading: true });
						const res = await fetch(process.env.URL + "/publicacion/detalle/" + id, requestOptions);
						const data = await res.json();
						console.log(data);
						if (data.message != "Ok") {
							setStore({ loading: false });
							return "error";
						}
						setStore({ loading: false });
						return data.publicacion;
					} catch (error) {
						console.log(error);
						return "error";
					}
				};
				const resultado = fetchDetalle(id);
				return resultado;
			}
		}
	};
};

export default getState;
