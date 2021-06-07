const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tipoUsuario: "",
			errorLogin: { mensaje: "", style: " d-none" }
		},

		actions: {
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
						const res = await fetch(process.env.URL + "/registro", requestOptions);
						const data = await res.json();
						console.log(data);
					} catch (error) {
						console.log(error);
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
						const res = await fetch(process.env.URL + "/login", requestOptions);
						const data = await res.json();

						if (data.message != "OK") {
							let newObject = {
								mensaje: data.message,
								style: ""
							};
							setStore({ errorLogin: newObject });
							return "error";
						}
						sessionStorage.setItem("token", data.token);
						return "ok";
					} catch (error) {
						console.log(error);
					}
				};
				let result = fetchLogin();
				return result;
			},
			logout: () => {
				sessionStorage.removeItem("token");
			}
		}
	};
};

export default getState;
