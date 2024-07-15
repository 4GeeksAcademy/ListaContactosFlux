import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CardContactos from "../component/CardContacto.jsx";



export const ContactosLista = () => { //donde muestro la lista de contactos y permitiremos eliminar cada contacto individualmente.
	const { store, actions } = useContext(Context); //Código basico. Utilizo useContext para acceder al contexto global, que contiene store y actions definidos en flux.js.
	
    
    useEffect(() => { //useEffect para cargar los contactos (actions.obtenerContactos()) cuando el componente se monta.
        actions.obtenerContactos(); // Cargo los contactos al cargar el componente (solicitud GET, CREADA EN FLUX.JS )
    }, []); //([] como segundo argumento para ejecutarlo solo una vez)

    const eliminarContacto = id => {
        actions.eliminarContacto(id); // llamo a actions.eliminarContacto(id) para eliminar un contacto específico. (flux.js) 
        actions.obtenerContactos();// Actualiza la lista de contactos después de eliminar uno. 
    }; 

    return (
      <div className="container">
          <h1 className="my-4">Agenda</h1>
          <div className="row">
              {Array.isArray(store.contactos) && store.contactos.map(contacto => (
                  <div key={contacto.id} className="col-lg-4 mb-4">
                      <CardContactos name={contacto.name} phone={contacto.phone} email={contacto.email} address={contacto.address} id={contacto.id}/>
                  </div>
              ))}
          </div>
      </div>
  );
};




// <button className="btn btn-danger" onClick={() => eliminarContacto(contacto.id)}> cuando se hace clic en el botón de eliminar. Esto enviará una solicitud DELETE a la API y actualizará el estado global eliminando el contacto 
