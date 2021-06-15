import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

import { Home } from "./views/home";

import { InicioSesion } from "./views/inicioSesion";
import injectContext from "./store/appContext";
import { ConfirmarUsuario } from "./views/confirmarUsuario";
import { PerfilVendedor } from "./views/perfilVendedor";
import { PerfilComprador } from "./views/perfilComprador";
import { Publicar } from "./views/publicar";
import { Feed } from "./views/feed";
import { Detalle } from "./views/detalle";
import { QuienesSomos } from "./views/quienesSomos";
import { ComoComprar } from "./views/comoComprar";
import { ComoVender } from "./views/comoVender";
import { Error404 } from "./views/404";
import { ErrorPrivado } from "./views/errorPrivado";
import { Mensajes } from "./views/mensaje";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registro } from "./component/registro";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
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

						<PrivateRoute path="/feed" component={Feed} exact />

						<PrivateRoute path="/mensaje" component={Mensajes} exact />

						<PrivateRoute path="/detalle" component={Detalle} exact />

						{/* <Route exact path="/feed">
							<Feed />
						</Route> */}

						<Route exact path="/detalle">
							<Detalle />
						</Route>

						<PrivateRoute path="/perfilVendedor" component={PerfilVendedor} exact />

						<PrivateRoute path="/perfilComprador" component={PerfilComprador} exact />

						<RutaLogin path="/inicioSesion" component={InicioSesion} exact />

						<Route exact path="/verificacion/:id">
							<ConfirmarUsuario />
						</Route>

						<PrivateRoute path="/publicar" component={Publicar} exact />

						<Route exact path="/comoVender">
							<ComoVender />
						</Route>

						<Route exact path="/comoComprar">
							<ComoComprar />
						</Route>

						<Route exact path="/quienesSomos">
							<QuienesSomos />
						</Route>

						<Route exact path="/errorPrivado">
							<ErrorPrivado />
						</Route>

						<Route>
							<Error404 />
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);

	function PrivateRoute({ component: Component, ...rest }) {
		const token = sessionStorage.getItem("token");
		return (
			<Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/errorPrivado" />)} />
		);
	}
	function RutaLogin({ component: Component, ...rest }) {
		const token = sessionStorage.getItem("token");
		const tipoUsuario = store.tipoUsuario;
		let rol;
		console.log(tipoUsuario);
		if (tipoUsuario == "") {
			rol = false;
		} else {
			rol = true;
		}
		return <Route {...rest} render={props => (rol ? <Component {...props} /> : <Redirect to="/" />)} />;
	}
	// export PrivateRoute;
};

export default injectContext(Layout);
