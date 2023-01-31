import { AddNewTaskBar } from '../../components/AddNewTaskBar'
import { Header } from '../../components/Header'
import { TaskList } from '../../components/TaskList'
import { useState } from 'react'

export function Home({ userName, functionName }) {
	const Swal = require('sweetalert2')
	const [taskName, setTaskName] = useState('')
	const [submitTaskName, setSubmitTaskName] = useState('')

	function addTask(e) {
		let name = e.target.value
		setTaskName(name)
		console.log(taskName)
	}

	function saveTasks() {
		if (taskName === '') {
			Swal.fire('Task name field is blank', '', 'error')
			return
		} else {
			setSubmitTaskName(taskName)
		}
	}

	return (
		<>
			<Header
				functionClick={functionName}
				name={userName}
			/>
			<main className='flex flex-col h-full w-screen justify-center items-center'>
				<AddNewTaskBar
					change={addTask}
					click={saveTasks}
				/>
				<TaskList name={submitTaskName}></TaskList>
			</main>
		</>
	)
}
