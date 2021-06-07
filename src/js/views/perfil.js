import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	let nombre = "Leandro";
	let apellido = "Marrero";

	return (
		<div className="row p-0 m-0">
			<div
				id="perfil"
				style={{ height: "350px" }}
				className="col-md-4 col-sm-11 shadow rounded bg-primary d-flex flex-column align-items-center mt-5 py-3 px-1">
				<img
					src="https://i.pinimg.com/474x/83/a9/a1/83a9a144ab03763667b8d8aa381bb441.jpg"
					alt="avatar"
					className="rounded-circle w-25"
				/>
				<h5 className="text-white">
					{nombre} {apellido}
				</h5>
				<div id="datos" className="w-75 text-center">
					<div className="bg-secondary my-2">{nombre}</div>
					<div className="bg-secondary my-2">{apellido}</div>
					<div className="bg-secondary my-2">03/09/1999</div>
					<div className="bg-secondary my-2">leandro.marrero@outlook.com</div>
				</div>
				<button className="btn btn-secondary mt-2">Editar perfil</button>
			</div>
			<div id="publicaciones" className="col-md-7 col-sm-11 p-0 m-0 mt-5">
				<div id="publicaciones" className="row p-0 m-0">
					{/* {publicaciones.map((elem, iterador)=>{ return( 
                                <button key={iterador} onClick={()=>verificar(elem)} className="col-12 btn btn-primary m-1 border shadow-sm">{elem}</button>
                    )})} */}
					<div className="col-md-4 col-sm-11">
						<img
							className="rounded w-100 my-2"
							src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
							alt=""
						/>
					</div>
					<div className="col-md-4 col-sm-11">
						<img
							className="rounded w-100 my-2"
							src="https://images.theconversation.com/files/254114/original/file-20190116-163292-1fq0u27.jpg?ixlib=rb-1.1.0&rect=2%2C0%2C1914%2C1514&q=45&auto=format&w=496&fit=clip"
							alt=""
						/>
					</div>
					<div className="col-md-4 col-sm-11">
						<img
							className="rounded w-100 my-2"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJJrtk2k_UxsBaDd2pw_f3HvWvRHHU3N61A&usqp=CAU"
							alt=""
						/>
					</div>

					<div className="col-md-4 col-sm-11">
						<img
							className="rounded w-100 my-2"
							src="https://images.theconversation.com/files/254114/original/file-20190116-163292-1fq0u27.jpg?ixlib=rb-1.1.0&rect=2%2C0%2C1914%2C1514&q=45&auto=format&w=496&fit=clip"
							alt=""
						/>
					</div>

					<div className="col-md-4 col-sm-11">
						<img
							className="rounded w-100 my-2"
							src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
							alt=""
						/>
					</div>

					<div className="col-md-4 col-sm-11">
						<img
							className="rounded w-100 my-2"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJJrtk2k_UxsBaDd2pw_f3HvWvRHHU3N61A&usqp=CAU"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
