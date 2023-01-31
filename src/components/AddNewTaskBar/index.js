import { SearchIcon } from '../searchIcon'

export function AddNewTaskBar() {
	return (
		<section className='flex flex-row items-center pb-4 border-b '>
			<form
				name='form'
				//onSubmit={changeUserName}
				id='form'
				className='focus-within:border h-9 focus-within:border-blue-600 hover:border hover:border-blue-600 mt-6 flex flex-row items-center bg-gray-200 p-6 rounded-lg shadow-lg '
			>
				<input
					type='text'
					placeholder='Name of Task'
					className='ml-2 bg-transparent w-32 font-semibold outline-none  placeholder:text-blue-600'
					//onChange={handleNameChange}
				></input>
			</form>
			<button
				form='form'
				aria-label='send button'
				type='button'
				//onClick={changeUserName}
				className=' ml-4 focus:outline-gray-400 outline-8  text-lg text-white mt-6 bg-blue-600  p-4 rounded-lg shadow-sm'
			>
				<SearchIcon />
			</button>
		</section>
	)
}
