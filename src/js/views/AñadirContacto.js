/* añadirContacto.js, en este componente lo utilizo para crear nuevos contactos o actualizar contactos existentes
a través de un formulario. Incluye campos para ingresar información como nombre completo, email y teléfono, 
Tiene funcionalidad para enviar estos datos al backend a través de las acciones definidas en flux.js.*/

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const AñadirContactos = () => {
	const { actions } = useContext(Context);// Obtiene las acciones (funciones) desde el contexto global
	const [nuevoContacto, setNuevoContacto] = useState({ nombreCompleto: "", email: "", teléfono: "" });

	//  Maneja el cambio en los campos del formulario
	const handleChange = e => {
		setNuevoContacto({ ...nuevoContacto, [e.target.name]: e.target.value });
	};

	// Maneja el envío del formulario para agregar un nuevo contacto
	const handleSubmit = e => {
		e.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario
		actions.agregarContacto(nuevoContacto); // Llama a la acción para agregar un nuevo contacto
		setNuevoContacto({ nombreCompleto: "", email: "", teléfono: "" }); // Limpia el estado después de agregar
	};
 // Renderiza el formulario para agregar contacto
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Nombre Completo</label>
					<input
						type="text"
						className="form-control"
						name="nombreCompleto"
						value={nuevoContacto.nombreCompleto}
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
						name="teléfono"
						value={nuevoContacto.teléfono}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Agregar Contacto
				</button>
			</form>
		</div>
	);
};

export default AñadirContactos;
