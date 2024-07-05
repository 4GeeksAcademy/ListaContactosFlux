/* añadirContacto.js, en este componente lo utilizo para crear nuevos contactos o actualizar contactos existentes
a través de un formulario. Incluye campos para ingresar información como nombre completo, email y teléfono, 
Tiene funcionalidad para enviar estos datos al backend a través de las acciones definidas en flux.js.*/

import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

 


const AñadirContactos = () => {
	const { actions } = useContext(Context);// Obtiene las acciones (funciones) desde el contexto global
	const [nuevoContacto, setNuevoContacto] = useState({ name: "", phone: "", email: "", address: "" });

	//  Maneja el cambio en los campos del formulario
	const handleChange = (e) => {
		setNuevoContacto({ ...nuevoContacto, [e.target.name]: e.target.value });
	
	};
	useEffect(()=>{
		console.log(nuevoContacto)
	},[nuevoContacto])

	// Maneja el envío del formulario para agregar un nuevo contacto
	const handleSubmit = (e) => {
		e.preventDefault(); // Por defecto! Evita el comportamiento predeterminado de envío del formulario
		actions.agregarContacto(nuevoContacto); // Llama a la acción para agregar un nuevo contacto
		setNuevoContacto({ name: "", phone: "", email: "", address: "" }); // Limpia el estado después de agregar
	};
 // HTLMyCSS Renderiza el formulario para agregar contacto
	return (
		<div className="containerAñadir">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Nombre Completo</label>
					<input
						type="text"
						className="form-control"
						name="name"
						value={nuevoContacto.name}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						name="email"
						value={nuevoContacto.email}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Teléfono</label>
					<input
						type="text"
						className="form-control"
						name="phone"
						value={nuevoContacto.phone}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Dirección</label>
					<input
						type="text"
						className="form-control"
						name="address"
						value={nuevoContacto.address}
						onChange={handleChange}
					/>
				</div>
				<div className = "botones">
						<input type="submit" value={"Añadir Contacto"} className="btn btn-submit"></input>
					<Link to="/contactos">
						<button type="button" className="btn btn-agenda">Agenda</button>
					</Link>	
				</div>
			</form>
		</div>
	);
};

export default AñadirContactos;
