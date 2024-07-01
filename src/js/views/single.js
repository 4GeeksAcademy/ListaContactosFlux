//se utiliza para mostrar los detalles de un contacto específico. Puedes adaptarlo para mostrar la información detallada de un contacto seleccionado desde la lista.


import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

//este COMPONENTE es donde habíamos pasado un prámetro de la url ":theId"
export const Single = props => {
	const { store, actions } = useContext(Context); //se utiliza para acceder al contexto global y obtener el estado (store).
	const params = useParams(); /* se importa "react-router-dom". Se obtiene el parámetro dinámico :theid de la URL
	const params= tiene el contenido de todos los parámetros que se envian en la URL. 
	Por ejemplo en el params.theid = zapatillas, tb sería igual en renderizado :theid = zapatillas (nombre variable), entonces en el layout.js en la route correspondiente sería /single/:theid, pero ese :theid =zapatillas */
	return (
		<div className="jumbotron">
			<h1 className="display-4">Detalles de Contacto: {store.contactos[params.theid].full_name}</h1> 

			<hr className="my-4" />

			<Link to="/"> 
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
