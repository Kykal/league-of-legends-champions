import React from 'react';

//React router
import {
	Routes,
	Route,
	Navigate
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
				<Route path="/:version/:champion" element={<Champion />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};


export default App; //Export main component
