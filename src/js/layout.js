import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { InicioSesion } from "./views/inicioSesion";
import injectContext from "./store/appContext";
import { ConfirmarUsuario } from "./views/confirmarUsuario";
import { PerfilVendedor } from "./views/perfilVendedor";
import { PerfilComprador } from "./views/perfilComprador";
import { Publicar } from "./views/publicar";
import { Feed } from "./views/feed";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registro } from "./component/registro";

//create your first component
const Layout = () => {
	// const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/feed">
							<Feed />
						</Route>
						<PrivateRoute path="/perfilVendedor" component={PerfilVendedor} exact />

						<PrivateRoute path="/perfilComprador" component={PerfilComprador} exact />

						{/* <RutaLogin path="/iniciarSesion" component={InicioSesion} exact /> */}

						<Route exact path="/verificacion/:id">
							<ConfirmarUsuario />
						</Route>

						<PrivateRoute path="/publicar" component={Publicar} exact />

						<Route>
							<h1>404 Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);

	function PrivateRoute({ component: Component, ...rest }) {
		const token = sessionStorage.getItem("token");
		return <Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/" />)} />;
	}
	// function RutaLogin({ component: Component, ...rest }) {
	// 	const token = sessionStorage.getItem("token");
	// 	const tipoUsuario = store.tipoUsuario;
	// 	if (tipoUsuario == "") {
	// 		rol = true;
	// 	} else {
	// 		rol = false;
	// 	}
	// 	return <Route {...rest} render={props => (rol ? <Component {...props} /> : <Redirect to="/" />)} />;
	// }
	// export PrivateRoute;
};

export default injectContext(Layout);
