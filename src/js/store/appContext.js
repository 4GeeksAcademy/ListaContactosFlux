//Aquí se define el estado inicial de la aplicación y se establecen las acciones que pueden modificar ese estado. Asegúrate de lo siguiente:


import React, { useState, useEffect } from "react";
import getState from "./flux.js"; //contiene el estado y las acciones de nuestra aplicación.

// Este es el contexto global que se usará en toda la aplicación, se crea utilizando React.createContext(null)
export const Context = React.createContext(null);

/* Esta función inyecta la tienda global en cualquier vista/componente donde quieras usarla, inyectaremos el contexto en layout.js,
puedes verlo aquí:https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35 */

const injectContext = PassedComponent => { //es una función que toma un componente (PassedComponent) y lo envuelve con el contexto global.
	const StoreWrapper = props => { //StoreWrapper es el componente que realmente maneja el estado global.
		//this will be passed as the contenxt value
		const [state, setState] = useState( //Se inicializa el estado utilizando useState a getState
			getState({ //getState para obtener el estado y las acciones iniciales.
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => { //LO PRIMERO QUE SE CARGA.  se usa para ejecutar código una vez que el componente se monta y dd se inicializa los datos, llamando a las acciones definidas en flux.js.

			
		}, []);

		
		return ( //Context.Provider envuelve el componente pasado (PassedComponent) y le proporciona el estado global (state).
			<Context.Provider value={state}> 
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
