const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tipoUsuario: "",
			errorLogin: { mensaje: "", style: " d-none" },
			loading: false
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
				fetchUsuario();
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

						if (data.message != "OK") {
							let newObject = {
								mensaje: data.message,
								style: ""
							};
							setStore({ errorLogin: newObject });
							setStore({ loading: false });
							return "error";
						}
						sessionStorage.setItem("token", data.token);
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
			},
			modificarDatos: (nombre, apellido) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({
					nombre: nombre,
					apellido: apellido
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
			}
		}
	};
};

export default getState;
