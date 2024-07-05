import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-fondo bg-green mb-3"> 
			<div className="ml-auto">
				<Link to="/anadirContactos">
					<button className="btn btn-nav">Añadir Contacto </button>
				</Link>
			</div>
		</nav>
	);
};
