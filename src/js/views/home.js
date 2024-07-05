import Agenda from "../../img/Agenda.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	const { actions } = useContext(Context);// Obtiene las acciones (funciones) desde el contexto global
	useEffect(()=>{
		actions.crearUsuario()
	},[])

	return(
	<div className="text-center mt-5">
		<h1>Agenda Loisinho</h1>
		<p>
			<img src={Agenda} />
		</p>
		<Link to="/contactos">
			<button className="btn btn-primary"> Agenda </button>
		</Link>
	</div>
	)
}


/* representa la página de inicio de la aplicación. Se muestra contenido principal, enlaces a otras secciones, o una introducción general. 
No está relacionado directamente con la creación o gestión de contactos.*/