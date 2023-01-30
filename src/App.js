import React from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Title } from './components/Title';
import { UserIcon } from './components/UserIcon';

function App() {
  return (
    <div className="flex flex-1 flex-col text-center w-screen h-screen justify-center items-center">
      <Logo></Logo>
      <Title content={'To do TDAH version'}></Title>
      <form name='form' id='form' className=' mt-6 flex flex-row items-center bg-gray-200 p-5 rounded-lg shadow-lg'>
        <UserIcon></UserIcon>
        <input placeholder='Tell me your name..' className='ml-6 bg-transparent outline-none'></input>

      </form>
      <button
        form='form'
        aria-label='send button'
        type='submit'
        className='  max-w-screen-button text-white font-mono font-semibold mt-6 bg-blue-600 w-1/2 p-4 rounded-lg shadow-sm'
      >
        Send
      </button>
    </div>
  );
}

export default App;
