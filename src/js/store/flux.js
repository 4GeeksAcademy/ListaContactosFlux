const getState = ({ getStore, getActions, setStore }) => { //getStore() te permite acceder a este estado y setStore() te permite actualizar este estado.

	return {
		
		store: { //Se crean las variables
			contactos: [],  //Añado una variable para almacenar los contactos dentro de un array. Inicialmente vacío, se llenará con datos de la API
		  },



		actions: {//AQUI, creamos las funciones
			crearUsuario: () => {
                fetch("https://playground.4geeks.com/contact/agendas/loisinho", {
                    method: "POST", //method: "POST" especifica que estamos enviando datos (nuevo contacto)
                    body: JSON.stringify({}), //convierte el objeto vacio {} nuevoContacto en una cadena JSON, que es el canal para comunicarse entre navegadores y servidores.
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json()) // respuesta de la comunicación a la api

                    .then(data => {
                        console.log (data) 
			})

                    .catch(error => console.error("Error: No se ha podido agregar el contacto", error));
            },

		
			obtenerContactos: () =>{
				fetch("https://playground.4geeks.com/contact/agendas/loisinho/contacts", {
					method: "GET",
					})
				.then(response => response.json())
        		.then(data => setStore({ contactos: data.contacts })) //setStore({ contactos: data.contacts })) actualiza el estado (VARIABLE )contactos con los datos recibidos data.contacts
       			.catch(error => console.error("Error al recibir los datos de los contactos:", error)); 
				
			},
			// Función agregarContacto que se encarga de enviar un nuevo contacto a la API y, si la solicitud es exitosa, actualizar el estado de la aplicación para incluir este nuevo contacto
            agregarContacto: (nuevoContacto) => {
                fetch("https://playground.4geeks.com/contact/agendas/loisinho/contacts", {
                    method: "POST", //method: "POST" especifica que estamos enviando datos (nuevo contacto)
                    body: JSON.stringify(nuevoContacto), //convierte el objeto nuevoContacto en una cadena JSON, que es el canal para comunicarse entre navegadores y servidores.
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json()) // respuesta de la comunicación a la api

                    .then(data => {
                        console.log (data)
						getActions().obtenerContactos() //aqui llamar a getActions().obtenerContactos() después de agregar, actualizar o eliminar. Esto asegura que la lista de contactos en el estado siempre esté sincronizada con los datos más recientes del servidor.

			})

                    .catch(error => console.error("Error: No se ha podido agregar el contacto" + nuevoContacto, error));
            },
			actualizarContacto: (id, contactoActualizado) => {
				fetch(`https://playground.4geeks.com/contact/agendas/loisinho/contacts${id}`, {
					method: "PUT", //method: "PUT" especifica que estamos actualizando datos.
					body: JSON.stringify(contactoActualizado), //convierte el objeto contacto en una cadena JSON.
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data)
						getActions().obtenerContactos() //aqui llamar a getActions().obtenerContactos() después de agregar, actualizar o eliminar un contacto para mantener la lista de contactos actualizada, no?
					})
					.catch(error => console.error("Error: No se ha podido actualizar", error));
			},

			eliminarContacto: (id) => { // se encarga de enviar una solicitud para eliminar un contacto de la API y, si la solicitud es exitosa, actualizar el estado de la aplicación para reflejar esta eliminación
				fetch(`https://playground.4geeks.com/contact/agendas/loisinho/contacts${id}`, {
					method: "DELETE" //method: "DELETE" especifica que estamos eliminando datos a través del ID que tiene nuestro contacto
				})
				.then(data => {
					console.log(data)
                    getActions().actualizContactos(); ////aqui llamar a getActions().obtenerContactos() después de agregar, actualizar o eliminar un contacto para mantener la lista de contactos actualizada, no?
                })
                .catch(error => console.error("Error: no se ha podido eliminar dicho/os contacto/os", error));
            },

		}
	};
};

export default getState;
