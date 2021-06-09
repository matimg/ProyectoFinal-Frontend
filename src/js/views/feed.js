import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/feed.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Masonry from "react-masonry-css";

export const Feed = () => {
	const { store, actions } = useContext(Context);
	const breakpointColumnsObj = {
		default: 5,
		1100: 3,
		700: 2
	};

	return (
		<div className="d-flex justify-content-center align-items-center mx-5 mt-5">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column">
				<div id="divInterno">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/3b/5d/58/3b5d58a963daa6d83182bbf8c9484210.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>

				<div id="divInterno">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/a6/01/86/a601862fd7565cdf74a38cc71362e413.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/40/bd/61/40bd61dfe070e72927d1e8d5a703110f.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className="rounded img-fluid"
						src="https://i.pinimg.com/236x/88/6e/aa/886eaaabf842f0da655a8ac33bea72c8.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/35/bb/5b/35bb5b1e925f08f7fa93d5932636f15b.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/10/d3/f5/10d3f5258dff019b0888bf1918473860.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/e7/f4/95/e7f495046e53ce75f6416f752c69b748.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/b4/04/d8/b404d8a9c2ea248334dba326d066da4d.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/35/bb/5b/35bb5b1e925f08f7fa93d5932636f15b.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
				<div id="divInterno">
					<img
						className=" rounded img-fluid "
						src="https://i.pinimg.com/236x/18/5e/1e/185e1ea10058aa770d8104baae0b3e13.jpg"
						alt=""
					/>
					<div className="row d-flex justify-content-around">
						<div className="col-xs-8">
							<div id="footerImagen" className=" text-white py-1">
								<p className="mt-1">Titulo</p>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="btn mr-n2">
								<i id="iconoFav" className="far fa-star" />
							</div>
						</div>
					</div>
				</div>
			</Masonry>
		</div>
	);
};
