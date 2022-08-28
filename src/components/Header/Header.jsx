import React, { useEffect, useState } from 'react';


//React router
import {
	Outlet
} from 'react-router-dom';

//Styled components
import styled from 'styled-components';


const HeaderSx = styled.header`

`;

//Main component content
const Header = () => {

	const [ championList, setChampionList ] = useState([]);

	//On component mount
	useEffect( () => {
		
	}, [] );

	//Component render
	return (
		<>
			<HeaderSx>
				<table>
					<thead>
						<tr>
							<th>
								Champion
							</th>
							<th>
								Role
							</th>
							<th>

							</th>
							<th>
								Price
							</th>
							<th>

							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								b
							</td>
						</tr>
					</tbody>
				</table>
			</HeaderSx>
			<Outlet />
		</>
	);
};


export default Header; //Export main component
