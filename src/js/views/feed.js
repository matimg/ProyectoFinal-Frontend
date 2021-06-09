import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/feed.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Feed = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div id="publicaciones" className="row d-flex justify-content-center align-items-center p-n1 mt-5 mx-2">
				<div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/564x/6c/c8/3e/6cc83e4fddef9d2fdf75b30a4604369e.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-sm-3 col-md-2 mt-0 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/b3/88/18/b38818674ce2769d5b5ec2f572848776.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/55/fd/45/55fd45416f268a1b039dec39382dc464.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/04/2c/e6/042ce6f35376785c1c06b4a08d876cdf.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/b1/24/f9/b124f922bf3d8920efbbb03ddba844e8.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/564x/6c/c8/3e/6cc83e4fddef9d2fdf75b30a4604369e.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>  */}
				{/* <div className="col-6 col-sm-3 col-md-2 mt-0 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/b3/88/18/b38818674ce2769d5b5ec2f572848776.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div> */}
				{/* <div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/55/fd/45/55fd45416f268a1b039dec39382dc464.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div> */}
				{/* <div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/04/2c/e6/042ce6f35376785c1c06b4a08d876cdf.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div> */}
				{/* <div className="col-6 col-sm-3 col-md-2 align-self-start">
					<div className="">
						<img
							className="rounded w-100"
							src="https://i.pinimg.com/236x/b1/24/f9/b124f922bf3d8920efbbb03ddba844e8.jpg"
							alt=""
						/>
						<div id="footerImagen" className="d-flex justify-content-around text-white py-1">
							<p className="ml-2 mt-1">Imagen</p>
							<div className="btn mt-n1 ml-auto">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
