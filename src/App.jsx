import React from 'react';

//React router
import {
	Routes,
	Route
} from "react-router-dom";


//Pages
import Header from 'components/Header';


//Main component content
const App = () => {


	//Component render
	return (
		<Routes>
			<Route path="/" element={<Header />} >

			</Route>
		</Routes>
	);
};


export default App; //Export main component
