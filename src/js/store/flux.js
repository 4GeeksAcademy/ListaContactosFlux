const getState = ({ getStore, getActions, setStore }) => { //getStore() te permite acceder a este estado y setStore() te permite actualizar este estado.

	return {
		store: { //Se crean las variables
			contactos: [] //Añado una variable para almacenar los contactos dentro de un array. Inicialmente vacío, se llenará con datos de la API
		},



		actions: {//AQUI, creamos las funciones.
			obtenerContactos: () =>{
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "GET",
					})
				.then(response => response.json())
        		.then(data => setStore({ contactos: data })) //setStore({ contactos: data }) actualiza el estado (VARIABLE )contactos con los datos recibidos.
       			.catch(error => console.error("Error al recibir los datos de los contactos:", error)); 
				
			},
			// Función agregarContacto que se encarga de enviar un nuevo contacto a la API y, si la solicitud es exitosa, actualizar el estado de la aplicación para incluir este nuevo contacto
            agregarContacto: (nuevoContacto) => {
                fetch("https://playground.4geeks.com/apis/fake/contact/", {
                    method: "POST", //method: "POST" especifica que estamos enviando datos (nuevo contacto)
                    body: JSON.stringify(nuevoContacto), //convierte el objeto nuevoContacto en una cadena JSON.
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json())

                    .then(data => {
                        console.log (data)
						obtenerContactos() //obtengo el estado actual de la aplicación utilizando la función getStore. 
                        ; //setStore({ contactos: [...store.contactos, data] }) añade el nuevo contacto al array contactos en el estado.
                    }) /* operador de propagación ( ... ). Por tanto, ayuda a crear un nuevo array que contiene todos los contactos actuales (store.contactos), más el nuevo contacto (data).
					setStore es una función que actualiza el ESTADO GLOBAL de la aplicación.
					{ contactos: [...store.contactos, data] } es el nuevo estado que estamos estableciendo. Es un objeto con una propiedad contactos que contiene el nuevo array de contactos.
					Ejemplo: store.contactos es [ { id: 1, nombre: "Juan" }, { id: 2, nombre: "María" } ] y data es { id: 3, nombre: "Carlos" }. 
					Se crea un nuevo array: [ { id: 1, nombre: "Juan" }, { id: 2, nombre: "María" }, { id: 3, nombre: "Carlos" } ] y setStore actualiza el estado de la aplicación para que contactos ahora sea este nuevo array.*/

                    .catch(error => console.error("Error: No se ha podido agregar el contacto" + nuevoContacto, error));
            },
			actualizarContacto: (id, contactoActualizado) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT", //method: "PUT" especifica que estamos actualizando datos.
					body: JSON.stringify(contactoActualizado), //convierte el objeto contacto en una cadena JSON.
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data)
						obtenerContactos()
					})
					.catch(error => console.error("Error: No se ha podido actualizar", error));
			},

			eliminarContacto: (id) => { // se encarga de enviar una solicitud para eliminar un contacto de la API y, si la solicitud es exitosa, actualizar el estado de la aplicación para reflejar esta eliminación
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE" //method: "DELETE" especifica que estamos eliminando datos a través del ID que tiene nuestro contacto
				})
					.then(() => {
						const store = getStore(); //obtiene el estado actual de la aplicación utilizando la función getStore
						const nuevosContactos = store.contactos.filter(contacto => contacto.id !== id); /*store.contactos.filter(contacto => contacto.id !== id) crea un nuevo array sin el contacto eliminado
						"store.contactos" es el array de contactos actual en el estado. y el método ".filter " de los arrays para crear un nuevo array que contiene todos los contactos, excepto aquel que tiene el id que se está eliminando.
						como? (contacto.id !== id) , Si contacto.id no es igual al id proporcionado, el contacto se incluye en el nuevo array.*/
						setStore({ contactos: nuevosContactos }); //actualiza el estado contactos con el nuevo array, al igual que cuando la función actualizarContacto
					})
					.catch(error => console.error("Error: no se ha podido eliminar dicho/os contacto/os", error));
			},

		// Use getActions to call a function within a fuction
			/*exampleFunction: () => { // exampleFunction función GLOBAL
				getActions().changeColor(0, "green"); //getActions nos permite llamar a una función dentro de otra función en este caso, a changeColor
			},
			
			loadSomeData: () => { //función vacia, se pueden realizar cargas de datos adicionales si es necesario
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				
			},
			/*changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const contactos = store.contactos.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				}); 

				//reset the global store
				setStore({ contactos: contactos });
			}*/
		}
	};
};

export default getState;
