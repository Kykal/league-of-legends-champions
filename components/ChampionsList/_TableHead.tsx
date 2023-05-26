//Main component content
const TableHead = (): JSX.Element => {
	//Main component render
	return (
		<thead
			className='border-b border-gold text-lg bg-blue'
		>
			<tr
				className='h-10'
			>
				<_Champion />
			</tr>
		</thead>
	);
};


export default TableHead; //Export main component



const _Champion = (): JSX.Element => {
	//Main component render
	return (
		<th
			rowSpan={2}
			colSpan={2}
		>
			Champion
		</th>
	);
};
