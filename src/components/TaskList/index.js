import { TaskItem } from '../TaskItem'

export function TaskList({ name, completed, click }) {
	return (
		<ul className='w-full max-w-screen-button flex flex-col justify-center mt-4  '>
			<TaskItem taskName={name} click={click} completed={completed} />
		</ul>
	)
}
