import { TaskItem } from '../TaskItem'

export function TaskList() {
	return (
		<ul className='w-full max-w-screen-button flex flex-col justify-center mt-8  '>
			<TaskItem completed={false}></TaskItem>
			<TaskItem completed />
		</ul>
	)
}
