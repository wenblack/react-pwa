export function Title({ content, blue }) {
	return (
		<h1 className='font-mono text-lg font-bold text-gray-900 '>
			{content}
			<span className='font-mono text-lg font-bold text-white '>{blue}</span>
		</h1>
	)
}
