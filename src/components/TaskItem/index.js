import { FiCheck } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'

export function TaskItem({ taskName, completed, click }) {
	if (completed) {
		return (
			<li className='focus:border font-extrabold  mt-2 p-3  text-green-500 text-base  text-center justify-between  focus-within:border-green-600 hover:border hover:border-green-600  flex flex-row items-center bg-green-200  rounded-sm shadow-lg '>
				{taskName}
				<button
					type='button'
					onClick={click}
				>
					<FiCheck color='green' />
				</button>
				<button type='button'>
					<FiTrash color='green' />
				</button>
			</li>
		)
	} else if (!completed) {
		return (
			<li className=' focus:border  font-extrabold mt-2 p-3 text-red-500 text-base text-center justify-between  focus-within:border-red-600 hover:border hover:border-red-600  flex flex-row items-center bg-red-200  rounded-sm shadow-lg '>
				{taskName}
				<button
					type='button'
					onClick={click}
					onSubmit={click}
				>
					<FiCheck color='red' />
				</button>
				<button type='button'>
					<FiTrash color='red' />
				</button>
			</li>
		)
	}
}
