import { AddNewTaskBar } from '../../components/AddNewTaskBar'
import { Header } from '../../components/Header'
import { TaskList } from '../../components/TaskList'
import { useState } from 'react'
import { ProgressBarADHD } from '../../components/ProgressBarADHD'

export function Home({ userName, functionName }) {
	const Swal = require('sweetalert2')
	const [taskName, setTaskName] = useState('')
	const [submitTaskName, setSubmitTaskName] = useState('')
	const [taks, setTasks] = useState(0)
	const [completeTask, setCompleteTask] = useState(0)
	const [isCompleted, setIsCompleted] = useState(false)

	function toggleCompleteTask() {
		if (isCompleted) {
			setIsCompleted(false)
			if (completeTask === taks) {
				setCompleteTask(completeTask - 1)
			}
		} else {
			setIsCompleted(true)
			if (completeTask < taks) {
				setCompleteTask(completeTask + 1)
			}
		}
		return
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
				<TaskList name={submitTaskName} click={toggleCompleteTask} completed={isCompleted}></TaskList>
			</main>
		</>
	)
}
