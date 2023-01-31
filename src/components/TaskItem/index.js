export function TaskItem({ completed }) {
	if (completed) {
		return (
			<li className='focus:border  mt-1 p-3 text-green-500 text-lg text-center justify-evenly  focus-within:border-green-700 hover:border hover:border-green-700  flex flex-col items-center bg-green-200  rounded-sm shadow-lg '>
				Task 2
			</li>
		)
	} else if (!completed) {
		return (
			<li className='focus:border  mt-1 p-3 text-red-500 text-lg text-center justify-evenly  focus-within:border-red-700 hover:border hover:border-red-700  flex flex-col items-center bg-red-200  rounded-sm shadow-lg '>
				Task 2
			</li>
		)
	}
}
