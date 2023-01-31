export function Title({ content, green }) {
	return (
		<h1 className='font-mono text-lg font-bold text-green-700 hover:outline hover:outline-green-900 '>
			{content}
			<span className='font-mono text-lg font-bold text-white '>{green}</span>
		</h1>
	)
}
