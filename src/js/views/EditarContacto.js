import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; //Hooks de React Router para la navegación y para obtener parámetros de la URL.
import { Context } from "../store/appContext";

const EditarContactos = () => {
    const { store, actions } = useContext(Context); // Obtiene el estado y las acciones del contexto global.
    const [contacto, setContacto] = useState({ name: "", phone: "", email: "", address: "" });
    const { id } = useParams(); // useParams: Obtiene el ID del contacto de la URL
    const navigate = useNavigate(); // Hook para la navegación. useNavigate: Permite redirigir a otras rutas.

    useEffect(() => { // se ejecuta cuando cambia el ID o la lista de contactos en el estado global. [id, store.contactos]
        const contactoExistente = store.contactos.find(c => c.id === parseInt(id)); // Busca el contacto en la lista de contactos por ID.
        if (contactoExistente) {
            setContacto(contactoExistente);// Si el contacto existe, actualiza el estado local con los datos del contacto.
        }
    }, [id, store.contactos]);

    const handleChange = (e) => { //Función que se ejecuta cuando cambia un campo del formulario.
        setContacto({ ...contacto, [e.target.name]: e.target.value });// Actualiza el estado local cuando el usuario cambia algún campo del formulario. 
    };

    const handleSubmit = async (e) => { //se ejecuta cuando se envía el formulario.
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario.
        await actions.actualizarContacto(id, contacto); // Llama a la acción para actualizar el contacto
        navigate("/contactos"); // Redirige a la lista de contactos, después de actualizar el contacto.
    };

    return (
        <div className="containerAñadir">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={contacto.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={contacto.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={contacto.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={contacto.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="botones">
                    <input type="submit" value={"Guardar Cambios"} className="btn btn-submit"></input>
                </div>
            </form>
        </div>
    );
};

export default EditarContactos;
