//Typings
type SubmitButton = {
	value: string;
}


//Main component content
const SubmitButton = ({ value }: SubmitButton): JSX.Element => {

	const background: string = 'bg-blue hover:bg-ultra-light-blue active:bg-light-blue disabled:bg-blue/50';
	const padding: string = 'py-4 px-5';
	const cursor: string = 'disabled:cursor-not-allowed';
	const text: string = 'disabled:text-dimmed';


	//Main component render
	return (
		<button
			disabled={value.length === 0}
			type='submit'
			className={`${background} ${padding} ${cursor} ${text}`}
		>
			Search
		</button>
	);
};


export default SubmitButton; //Export main component
