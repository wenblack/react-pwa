import { FiCheck } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'
import { useState } from 'react'


export let completed

export function TaskItem({ taskName, add, remove }) {
	const [isCompleted, setIsCompleted] = useState(false)


	function toggleCompleteTask() {
		if (isCompleted) {
			setIsCompleted(false)

		} else if (!isCompleted) {
			setIsCompleted(true)
		}
	}



	if (isCompleted) {
		return (
			<li className='focus:border font-extrabold  mt-2 p-3  text-green-500 text-base  text-center justify-between  focus-within:border-green-600 hover:border hover:border-green-600  flex flex-row items-center bg-green-200  rounded-sm shadow-lg '>
				{taskName}
				<button
					type='button'
					onClick={toggleCompleteTask}
				>
					<FiCheck color='green' onClick={remove} />
				</button>
				<button type='button'>
					<FiTrash color='green' />
				</button>
			</li>
		)
	} else if (!isCompleted) {
		return (
			<li className=' focus:border  font-extrabold mt-2 p-3 text-red-500 text-base text-center justify-between  focus-within:border-red-600 hover:border hover:border-red-600  flex flex-row items-center bg-red-200  rounded-sm shadow-lg '>
				{taskName}
				<button
					type='button'
					onClick={toggleCompleteTask}
				>
					<FiCheck color='red' onClick={add} />
				</button>
				<button type='button'>
					<FiTrash color='red' />
				</button>
			</li>
		)
	}
}
