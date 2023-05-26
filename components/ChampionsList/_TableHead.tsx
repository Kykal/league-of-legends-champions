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
				<th rowSpan={2} colSpan={2} >
					Champion
				</th>
				<th
					rowSpan={2}
					className='w-40'
				>
					Region
				</th>
				<th colSpan={2} >
					Price
				</th>
			</tr>
			
			<tr
				className='h-10'
			>
				<th
					className='w-40'
				>
					Blue Essence
				</th>
				<th
					className='w-40'
				>
					Riot Points
				</th>
			</tr>
		</thead>
	);
};


export default TableHead; //Export main component
