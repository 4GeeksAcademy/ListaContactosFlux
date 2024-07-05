import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/contactosLista.css";

export const ContactosLista = () => { //donde muestro la lista de contactos y permitiremos eliminar cada contacto individualmente.
	const { store, actions } = useContext(Context); //Código basico. Utilizo useContext para acceder al contexto global, que contiene store y actions definidos en flux.js.
	
    
    useEffect(() => { //useEffect para cargar los contactos (actions.obtenerContactos()) cuando el componente se monta.
        actions.obtenerContactos(); // Cargo los contactos al cargar el componente (solicitud GET, CREADA EN FLUX.JS )
    }, []); //([] como segundo argumento para ejecutarlo solo una vez)

    const eliminarContacto = id => {
        actions.eliminarContacto(id); // llamo a actions.eliminarContacto(id) para eliminar un contacto específico. (flux.js) 
    }; 
	return (
        <div className="containerLis">
            <h1>Agenda</h1>
            <ul className="list-group">
                {Array.isArray(store.contactos) && store.contactos.map(contacto => ( // {store.contactos.map(contacto => Muestra cada contacto como un elemento de lista (<li>), con un enlace para ver detalles (Link) y un botón para eliminar (Eliminar contacto).
                    <li key={contacto.id} className="list-group-item d-flex justify-content-between">
                        <Link to={`/single/${contacto.id}`}>
                            <span>{contacto.name}</span>
                            <span>{contacto.phone}</span>
                            <span>{contacto.email}</span>
                            <span>{contacto.address}</span>
                        </Link>
                        <button className="btn btn-danger" onClick={() => eliminarContacto(contacto.id)}>
                            Eliminar contacto
                        </button>
                    </li>
                ))}
            </ul>
            <br />
            <div className="button-group d-flex justify-content-between">
                <div className="ml-auto">
                    <Link to="/">
                        <button className="btn btn-navbar">Volver al inicio</button>
                    </Link>
                </div>
                <div className="ml-auto">
                    <Link to="/anadirContactos">
                        <button className="btn btn-navbar">Crear otro contacto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// <button className="btn btn-danger" onClick={() => eliminarContacto(contacto.id)}> cuando se hace clic en el botón de eliminar. Esto enviará una solicitud DELETE a la API y actualizará el estado global eliminando el contacto 