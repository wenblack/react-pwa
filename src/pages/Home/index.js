import { AddNewTaskBar } from '../../components/AddNewTaskBar'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { ProgressBarADHD } from '../../components/ProgressBarADHD'
import { TaskItem } from '../../components/TaskItem'

export function Home({ userName, functionName }) {
	const Swal = require('sweetalert2')
	let nextId = 0;
	const [arrayTask, SetArrayTasks] = useState([])
	const [taskName, setTaskName] = useState('')
	const [submitTaskName, setSubmitTaskName] = useState('')
	const [taks, setTasks] = useState(0)
	const [completeTask, setCompleteTask] = useState(0)
	const [isCompleted, setIsCompleted] = useState(false)
	const [result, setResult] = useState('')
	const [taskComplete, setTaskComplet] = useState(false)
	let complet = ''

	function toggleCompleteTask() {

		if (isCompleted) {
			setIsCompleted(false)
			setCompleteTask(completeTask - 1)
			complet = false
		} else {
			setIsCompleted(true)
			setCompleteTask(completeTask + 1)
			complet = true
		}
	}
	function cancelRefresh(e) {
		e.preventDefault()
		saveTasks()
	}

	function addTask(e) {
		let name = e.target.value
		setTaskName(name)
		console.log(taskName)
	}

	function saveTasks(e) {
		if (taskName === '') {
			Swal.fire('Task name field is blank', '', 'error')
			return
		} else {
			setSubmitTaskName(taskName)
			setTasks(taks + 1)
			arrayTask.push({
				id: nextId++,
				name: taskName,
				completed: false
			});
		}
	}

	return (
		<>
			<Header
				functionClick={functionName}
				name={userName}
			/>
			<main className='flex flex-col h-full w-screen justify-center items-center'>
				<ProgressBarADHD
					complete={completeTask}
					total={taks}
					success
				/>
				<AddNewTaskBar
					change={addTask}
					click={saveTasks}
					submit={cancelRefresh}
				/>
				<ul className='w-full max-w-screen-button flex flex-col justify-center mt-4  '>
					{arrayTask.map(tasks => (
						<TaskItem key={tasks.id} taskName={tasks.name} click={toggleCompleteTask} completed={complet} />
					))}
				</ul>
			</main>
		</>
	)
}
