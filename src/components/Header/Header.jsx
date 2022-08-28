import React from 'react';



//React router
import {
	Outlet,
	Link
} from 'react-router-dom';


//Styled components
import styled from 'styled-components';


//Icons
import { AiFillHome } from 'react-icons/ai';


//Custom components
import IconButton from 'components/IconButton';


const HeaderContainer = styled.header`

	display: flex;
	align-items: center;
	justify-content: space-between;


	height: 4em;
	padding: 1.25em;
`;


//Main component content
const Header = () => {

	//Component render
	return (
		<>
			<HeaderContainer>
				<Link to="/" >
					<IconButton>
						<AiFillHome />
					</IconButton>
				</Link>
			</HeaderContainer>
			<Outlet />
		</>
	);
};


export default Header; //Export main component
