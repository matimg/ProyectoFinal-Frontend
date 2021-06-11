import React, { useContext, useState, useEffect } from "react";
import "../../styles/spinner.scss";

export const Spinner = () => {
	const estilo = {
		position: "absolute",
		top: "50%",
		right: "40%",
		left: "40%"
	};

	return (
		// <div className="m-0 vh-100 row text-center align-content-center justify-content-center">
		<div style={estilo}>
			<div className="col-auto d-flex justify-content-center">
				<div
					id="spinner"
					className="spinner-border"
					role="status"
					// style={{ width: "100px", height: "100px", borderWidth: "10px" }}
				>
					<span className="sr-only" />
				</div>
			</div>
		</div>
	);
};
