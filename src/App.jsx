import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [isGameOver, setIsGameOver] = useState(false);
  
  const again = () => {
    setScore(20);
    setHighScore(0);
    setSecretNumber(Math.floor(Math.random() * 20) + 1);
    setIsGameOver(false);
  }
  


  return (
    <>
      <div className='bg-[#212121] h-screen w-full relative'>
        <h1 className='absolute top-5 text-white ml-335 text-xl font-semibold'>(Between 1 and 20)</h1>
        <button className='ml-5 mt-5 px-9 py-2 bg-white text-2xl font-semibold text-black cursor-pointer transition-transform hover:bg-amber-50'
        onClick={again}
        >Again!</button>
        <h1 className='absolute bottom-125 text-white text-6xl font-semibold ml-130'
        >Guess My Number!</h1>
        <hr className='absolute bottom-100 w-full h-1.75 bg-white border-0'/>
        <div className='bg-white px-12 py-4 absolute bottom-85 ml-175 text-8xl font-semibold'
        >{isGameOver ? secretNumber : '?'}</div>
        <input 
        type='number' 
        className='w-60 px-6 py-4 ml-15 border-4 border-white absolute bottom-45 text-white text-5xl font-semibold bg-transparent text-center caret-white'/>
        <button className='text-black bg-white ml-25 font-semibold text-3xl px-8 py-2 absolute bottom-25 cursor-pointer transition-transform hover:bg-amber-50'
        >Check!</button>
        <h1 className='absolute bottom-65 ml-250 text-3xl font-semibold text-white'>Start guessing...</h1>
        <h1 className='absolute text-white font-semibold text-3xl bottom-45 ml-250'>Score: {score}</h1>
        <h1 className='absolute text-white font-semibold text-3xl bottom-33 ml-250'>Highscore: {highScore}</h1>
      </div>
    </>
  )
}

export default App
