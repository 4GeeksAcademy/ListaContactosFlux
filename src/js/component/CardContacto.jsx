import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const CardContactos = ({name, phone, email, address, id }) => { // recibe props desestructurados. Aquí contacto representa los datos de cada contacto y borrarContacto
  const{store, actions} = useContext(Context)
  return (
    <div className="card mb-3">
      <div className="card-body">
       <h5 className="card-title">{name}</h5>   {/*Muestro el nombre del contacto con la clase */}
        <h6 className="card-subtitle mb-2 text-muted">{phone}</h6> {/*Muestro el teléfono del contacto*/}
        <p className="card-text">{email}</p> {/*Muestro el teléfono el email */}
        <p className="card-text">{address}</p> {/*Muestro la dirección */}
        <button className="btn btn-danger" onClick={() => actions.eliminarContacto(id)}>
          Borrar contacto
        </button>
      </div>
    </div>
  );
};

export default CardContactos;
