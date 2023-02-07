import { AddNewTaskBar } from '../../components/AddNewTaskBar'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { ProgressBarADHD } from '../../components/ProgressBarADHD'
import { TaskItem } from '../../components/TaskItem'


export function Home({ userName, functionName }) {
	const Swal = require('sweetalert2')
	const [arrayTask, SetArrayTasks] = useState([])
	const [taskName, setTaskName] = useState('')
	const [submitTaskName, setSubmitTaskName] = useState('')
	const [taks, setTasks] = useState(0)
	const [completeTask, setcompleteTask] = useState(0)
	const [result, setResult] = useState('')


	useEffect(() => {
		let totalTask = taks
		let totalCompletedTasks = completeTask

		if (totalCompletedTasks === totalTask) {
			setResult('success')
		} else if (totalCompletedTasks < totalTask & totalCompletedTasks > 1) {
			setResult('warning')
		} else {
			setResult('')
		}


	}, [taks, completeTask])


	function addNewTaskComplete() {
		let totalCompleted
		totalCompleted = completeTask
		setcompleteTask(totalCompleted + 1)
	}

	function removeTaskComplete() {
		let totalCompleted
		totalCompleted = completeTask
		setcompleteTask(totalCompleted - 1)
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
		let total
		let nextId
		if (taskName === '') {
			Swal.fire('Task name field is blank', 'Please fill the name field', 'error')
			return
		} else {
			setSubmitTaskName(taskName)
			setTasks(taks + 1)
			total = taks
			arrayTask.push({
				id: nextId++,
				name: taskName,
				completed: false,
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
					total={taks}
					complete={completeTask}
					response={result}
				/>
				<AddNewTaskBar
					change={addTask}
					click={saveTasks}
					submit={cancelRefresh}
				/>
				<ul className='w-full max-w-screen-button flex flex-col justify-center mt-4  '>
					{arrayTask.map(tasks => (
						<TaskItem
							key={tasks.id}
							taskName={tasks.name}
							add={addNewTaskComplete}
							remove={removeTaskComplete}
						/>
					))}
				</ul>
			</main>
		</>
	)
}
