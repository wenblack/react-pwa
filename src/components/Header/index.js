import React from 'react'
import { Title } from '../Title'

export function Header({ name, functionClick }) {
	return (
		<header className=' flex w-screen justify-evenly items-center  p-4  flex-row  bg-blue-500 shadow-lg '>
			<Title
				content={`Welcome `}
				blue={`${name} !`}
			></Title>
			<button
				form='form'
				aria-label='send button'
				type='button'
				onClick={functionClick}
				className=' px-4 text-lg text-white font-mono font-normal  bg-blue-900  w-auto p-2 rounded-lg shadow-sm'
			>
				Log Out
			</button>
		</header>
	)
}
