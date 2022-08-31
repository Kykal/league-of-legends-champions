import React, { useEffect } from 'react';


//Redux
import { useDispatch } from 'react-redux';
import { changeBackgroundUrl } from 'features/backgroundUrl';

//React router
import { Link } from 'react-router-dom';


//Styled components
import styled from 'styled-components';


const Box = styled.div`
	background-color: var(--blue);
	padding: 2em;

	h1#general-label {
		padding-bottom: 0.25em;
	}

	p {
		padding-bottom: 1.75em;
		text-align: justify;
		line-height: 1.75em;
	}

	h1,h2 {
		color: var(--gold);
		padding-bottom: 0.5em;
	}

	strong {
		color: var(--dark-gold);
	}

	a {
		color: var(--ultra-light-blue);
		transition-duration: 125ms;

		:hover {
			filter: saturate(2);
		}
	}

	p.text-center {
		text-align: center;
	}
`;

//Main component content
const Disclaimer = () => {

	//React redux
	const dispatch = useDispatch();

	useEffect( () => {

		document.title = "Disclaimer - League of Legends Champions";

		//Clear background
		dispatch( changeBackgroundUrl("") );
	}, [dispatch] );

	//Component render
	return (
		<Box>
			<div id="disclaimer-header">
				<h1 id="general-label" >DISCLAIMER</h1>
				<p id="last-update" ><strong>Last updated August 31, 2022</strong></p>
			</div>
			<div id="disclaimer-website-disclaimer">
				<h2>WEBSITE DISCLAIMER</h2>
				<p>
					The information provided by <strong>Riot Games, Inc.</strong> ("we", "us", "our")
					on <Link to="https://league-of-legends-champions-data-kykal.vercel.app/">https://league-of-legends-champions-data-kykal.vercel.app/</Link> (the "Site")
					is for general information purposes only. All information on the Site  is provided in good faith,
					however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
					reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR
					ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE  OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE
					AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
				</p>
			</div>
			<div id="disclaimer-website-links-disclaimer">
				<h2>EXTERNAL LINKS DISCLAIMER</h2>
				<p>
					The Site may contain (or you may be sent through the Site) links to other
					websites or content belonging to or originating from third parties or links to
					websites and features in banners or other advertising. Such external links are
					not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
					availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
					ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION
					OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR
					FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR
					IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
				</p>
				<p className="text-center" >
					<strong>
						This web app is not affiliated by any means to Riot Games, Inc.
					</strong>
				</p>
			</div>
		</Box>
	);
};


export default Disclaimer; //Export main component
