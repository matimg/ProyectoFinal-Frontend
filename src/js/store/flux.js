const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			crearUsuario: (nombre, apellido, fechaNacimiento, email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre,
					apellido: apellido,
					fechaNacimiento: fechaNacimiento,
					email: email,
					password: password,
					tipoUsuario: "cliente"
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const fetchUsuario = async () => {
					try {
						const res = await fetch(process.env.URL + "/registro", requestOptions);
						const data = await res.JSON();
						console.log(data);
					} catch (error) {
						console.log(error);
					}
				};
				fetchUsuario();
			}
		}
	};
};

export default getState;
