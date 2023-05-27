//NextJS
import Link from "next/link";


//Main component content
const Navbar = (): JSX.Element => {

	const display: string = 'flex items-center justify-between';
	const height: string = 'h-15';
	const padding: string = 'px-4 py-3';


	//Main component render
	return (
		<nav
			className={`${display} ${height} ${padding}`}
		>
			<Link
				href='/'
				className='flex items-center'
			>

				<h1
					className='text-gold text-2xl'
				>
					Home
				</h1>
			</Link>
		</nav>
	);
};


export default Navbar; //Export main component
