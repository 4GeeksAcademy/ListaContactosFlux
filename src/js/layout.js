import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import {ContactosLista} from "./views/ContactosLista.js";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import AñadirContactos from "./views/AñadirContacto.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
//import { enhanceManualRouteObjects } from "react-router/dist/lib/components";

//create your first component
const Layout = () => {
	//el nombre base se utiliza cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
	// puedes establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, por ejemplo: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return ( //Estructura base = código PADRE de todo nuestro proyecto REACt. <BrowserRouter, viene importado "react-router-dom" (biblioteca) y envuelve dentro el código que vamos a trabajar en diferentes rutas
		<div>
			<BrowserRouter basename={basename}> 
				<ScrollToTop>
					<Navbar />
					<Routes> 
						<Route path="/" element={<Home/>}/>
						<Route path="/contactos" element={<ContactosLista/>}/>
						<Route path="/anadirContactos" element={<AñadirContactos/>}/>
						/*<Route path="/single/:theid" element={<Single/>}/>
						<Route path="*" element={<h1>Not found!</h1>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

/* Los : del theid, nos permite renderizar una variable, es decir, loque aparezca despues de los : será una variable. Como accedemos a dicha variable? a través del componente {<Single/>}. 
Entonces el :theid, nos permitirá identificar un producto u otro a través de este id. Ejemplo: www.amazon.com/single/1234566  el :theid= 1234566 

En cambi, si entran en una ruta que no funciona... renderizará el not found, porque creamos esta route a traves del"*".       

Como vemos, navbar y footer, siempre serán lo mismo, lo unico que cambia son las rutas en base a la URL... Por ejemplo: / , /demo , /single/:theid , *  */ 