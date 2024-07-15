import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const CardContactos = ({name, phone, email, address, id }) => { // recibe props desestructurados. Aquí contacto representa los datos de cada contacto y borrarContacto
  const{store, actions} = useContext(Context)

  const eliminarContacto = (id) => {
    actions.eliminarContacto(id);
    actions.obtenerContactos();
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
       <h5 className="card-title">{name}</h5>   {/*Muestro el nombre del contacto con la clase */}
        <h6 className="card-subtitle mb-2 text-muted">{phone}</h6> {/*Muestro el teléfono del contacto*/}
        <p className="card-text">{email}</p> {/*Muestro el teléfono el email */}
        <p className="card-text">{address}</p> {/*Muestro la dirección */}
        <div className="button-group mt-4">
           <Link to={`/editarContactos/${id}`} className="btn btn-edit">
              <i className="bi bi-pencil-square" style={{ color: '#1d4350', marginRight: '5px' }}></i> {/* iconos importados de boostrap */}
           </Link>
          <button className="btn btn-delete" onClick={() => eliminarContacto(id)}>
              <i className="bi bi-person-x-fill" style={{ border: "red", marginRight: '5px' }}></i> {/* iconos importados de boostrap */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContactos;
