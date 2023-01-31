import { SearchIcon } from '../searchIcon'

export function AddNewTaskBar({ change, click, submit }) {
	return (
		<section className='flex flex-row items-center pb-3 border-b '>
			<form
				name='form'
				id='form'
				onSubmit={submit}
				className='focus-within:border h-9 focus-within:border-green-600 hover:border hover:border-green-600 mt-6 flex flex-row items-center bg-gray-200 p-6 rounded-lg shadow-lg '
			>
				<input
					type='text'
					placeholder='Name of Task'
					onChange={change}
					className='ml-2 bg-transparent w-32 font-semibold outline-none  placeholder:text-green-600'
				></input>
			</form>
			<button
				form='form'
				aria-label='send button'
				type='button'
				onClick={click}
				className=' ml-4 hover:border hover:border-green-600	 focus:outline-green-600 outline-8  mt-6   p-4 rounded-lg  bg-gray-200 '
			>
				<SearchIcon />
			</button>
		</section>
	)
}
