import { AddNewTaskBar } from '../../components/AddNewTaskBar'
import { Header } from '../../components/Header'
import { TaskList } from '../../components/TaskList'

export function Home({ userName, functionName }) {
	return (
		<>
			<Header
				functionClick={functionName}
				name={userName}
			/>
			<main className='flex flex-col h-full w-screen justify-center items-center'>
				<AddNewTaskBar />
				<TaskList></TaskList>
			</main>
		</>
	)
}
