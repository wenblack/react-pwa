import React from 'react'
import { Title } from '../Title'

export function Header({ name, functionClick }) {
	return (
		<header className=' flex w-screen justify-evenly items-center  p-4  flex-row  bg-green-500 shadow-lg '>
			<Title
				content={`Welcome `}
				green={`${name} !`}
			></Title>
			<button
				form='form'
				aria-label='send button'
				type='button'
				onClick={functionClick}
				className=' px-4 text-lg hover:border hover:border-white focus:border outline-none focus:border-white text-white font-mono font-normal  bg-green-900  w-auto p-2 rounded-lg shadow-sm'
			>
				Log Out
			</button>
		</header>
	)
}
