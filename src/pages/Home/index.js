export function Home({ name, functionClick }) {
	return (
		<header className='flex w-screen justify-evenly items-center flex-row '>
			<h1>Welcome {name} !</h1>
			<button
				form='form'
				aria-label='send button'
				type='button'
				onClick={functionClick}
				className='max-w-screen-button text-lg text-white font-mono font-normal mt-4 bg-blue-600  w-72 p-2 rounded-lg shadow-sm'
			>
				Log Out
			</button>
		</header>
	)
}
