//Typings
type SubmitButton = {
	
}


//Main component content
const SubmitButton = (props: SubmitButton): JSX.Element => {

	const background: string = 'bg-blue hover:bg-ultra-light-blue active:bg-light-blue';
	const padding: string = 'py-4 px-5';

	//Main component render
	return (
		<button
			type='submit'
			className={`${background} ${padding}`}
		>
			Search
		</button>
	);
};


export default SubmitButton; //Export main component
