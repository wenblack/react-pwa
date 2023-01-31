import { TaskItem } from '../TaskItem'

export function TaskList({ name }) {
	return (
		<ul className='w-full max-w-screen-button flex flex-col justify-center mt-8  '>
			<TaskItem taskName={name} />
			<TaskItem />
		</ul>
	)
}
