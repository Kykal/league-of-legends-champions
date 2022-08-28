import React from 'react';

//React router
import {
	Routes,
	Route
} from "react-router-dom";



//Custom components
import Header from 'components/Header';

//Pages
import Main from 'pages/Main';
import Champion from 'pages/Champion';


//Main component content
const App = () => {


	//Component render
	return (
		<Routes>
			<Route path="/" element={<Header />} >
				<Route path="/" exact element={<Main />} />
				<Route path=":champion" element={<Champion />} />
			</Route>
		</Routes>
	);
};


export default App; //Export main component
