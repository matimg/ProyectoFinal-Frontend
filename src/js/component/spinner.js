import React, { useContext, useState, useEffect } from "react";

export const Spinner = () => {
	return (
		<div className="m-0 vh-100 row text-center align-content-center justify-content-center">
			<div className="col-auto">
				<div
					className="spinner-border text-primary"
					role="status"
					style={{ width: "100px", height: "100px", borderWidth: "10px" }}>
					<span className="sr-only" />
				</div>
			</div>
		</div>
	);
};
