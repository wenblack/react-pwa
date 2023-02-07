import { Logo } from '../../components/Logo'
import { Title } from '../../components/Title'
import { UserIcon } from '../../components/UserIcon'
import '../../App.css'
import { useState } from 'react'
import { Home } from '../Home'

export function Login() {
	const Swal = require('sweetalert2')
	const [userName, setUserName] = useState('')
	const [isUsername, setIsUserName] = useState(false)

	function modalLoading() {
		let timerInterval
		Swal.fire({
			title: 'Saving Your data!',
			timer: 1500,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading()
				const b = Swal.getHtmlContainer().querySelector('b')
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft()
				}, 100)
			},
			willClose: () => {
				clearInterval(timerInterval)
			}
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {

			}
		})
	}

	function changeUserName(e) {
		e.preventDefault()

		if (userName === '') {
			Swal.fire('Name field is blank', '', 'error')
			return
		}
		if (isUsername === true) {
			setIsUserName(false)
			console.log('User disconnected')
		} else if (isUsername === false) {
			setIsUserName(true)
			modalLoading()
			console.log('User connected')
		}
	}

	function handleNameChange(event) {
		let name = event.target.value
		setUserName(name)
	}

	if (isUsername) {
		return (
			<Home
				functionName={changeUserName}
				userName={userName}
			></Home>
		)
	} else if (!isUsername) {
		return (
			<div className='flex flex-1 flex-col text-center w-screen h-screen justify-center items-center'>
				<Logo></Logo>
				<Title content={'To do ADHD version'}></Title>
				<form
					name='form'
					onSubmit={changeUserName}
					id='form'
					className='focus-within:border focus-within:border-green-600 hover:border hover:border-green-600 mt-6 flex flex-row items-center bg-gray-200 p-5 rounded-lg shadow-lg '
				>
					<UserIcon></UserIcon>
					<input
						type='text'
						placeholder='Tell me your name..'
						className='ml-4 text-green-700 bg-transparent font-semibold outline-none   placeholder:text-green-600'
						onChange={handleNameChange}
					></input>
				</form>
				<button
					form='form'
					aria-label='send button'
					type='button'
					onClick={changeUserName}
					className='focus:outline-gray-400 outline-8  max-w-screen-button text-lg text-white font-mono font-semibold mt-6 bg-green-600  w-72 p-4 rounded-lg shadow-sm'
				>
					Save
				</button>
			</div>
		)
	}
}
