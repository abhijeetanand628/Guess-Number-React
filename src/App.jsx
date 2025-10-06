import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#212121');
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(Number(localStorage.getItem('highScore')) || 0);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [myNumber, setMyNumber] = useState('');
  const [msg, setMsg] = useState('Start guessing...');
  
  const again = () => {
    setScore(20);
    setSecretNumber(Math.floor(Math.random() * 20) + 1);
    setIsGameOver(false);
    setMyNumber('');
    setMsg('Start guessing...')
    setBgColor('#212121')
  }

  const reset = () => {
    if(confirm("Are you sure you want to reset the Highscore?"))
    {
      // localStorage.clear(); --> This removes every localStorage item present in the project.
      localStorage.removeItem('highScore');
      setHighScore(0);
    }
    setMsg('Highscore reset!');
    setTimeout(() => 
      setMsg('Start guessing...'), 
    1000)
  }
  
  const winCondition = () => {
    const mynumber = Number(myNumber)

    if(myNumber === '')
    {
      setMsg("Enter a number!")
      return;
    }

    else if(mynumber > 20 || mynumber < 1)
    {
      setMsg('Enter a number between 1 and 20!')
      return;
    }

    if(mynumber === secretNumber)
    {
      if(score > highScore)
      {
        setHighScore(score);
        localStorage.setItem('highScore', score);
      }
      setIsGameOver(true);
      setMsg('You Won..!')
      setMyNumber(''); 
      setBgColor('#16a34a')
    }
    else if(score > 1)
    {
      setMsg(mynumber > secretNumber ? 'Too High..!' : 'Too Low..!')
      setScore(score - 1);
    }

    else
    {
      setIsGameOver(true);
      setMsg('You Lost..!')
      setScore(0);
      setMyNumber(''); 
      setBgColor('#dc2626')
    }
  }

  return (
    <>
      <div 
      style={{ backgroundColor: bgColor }}
      className="h-screen w-full relative transition-colors duration-300">

        <h1 className='absolute top-5 text-white ml-335 text-xl font-semibold'>(Between 1 and 20)</h1>
        
        <button className='ml-5 mt-5 px-5 py-2 bg-white text-2xl font-semibold text-black cursor-pointer transition-transform hover:bg-amber-50'
        onClick={again}
        >Play Again!</button>

        <h1 className='absolute bottom-125 text-white text-6xl font-semibold ml-130'
        >Guess My Number!</h1>

        <hr className='absolute bottom-100 w-full h-1.75 bg-white border-0'/>

        <div className='bg-white px-12 py-4 absolute bottom-85 ml-175 text-8xl font-semibold'
        >{isGameOver ? secretNumber : '?'}</div>

        <input 
        type='number' 
        // min='1' --> These sets the input so that the player can only put numbers b/w 1 and 20 in the input box.
        // max='20'
        value={myNumber}
        disabled={isGameOver}
        onChange={(e) => setMyNumber(e.target.value)}
        className='w-60 px-6 py-4 ml-15 border-4 border-white absolute bottom-45 text-white text-5xl font-semibold bg-transparent text-center caret-white'/>

        <button className='text-black bg-white ml-25 font-semibold text-3xl px-8 py-2 absolute bottom-25 cursor-pointer transition-transform hover:bg-amber-50'
        onClick={winCondition}
        disabled={isGameOver}
        >Check!</button>

        <h1 className='absolute bottom-65 ml-250 text-3xl font-semibold text-white'>{msg}</h1>
        <h1 className='absolute text-white font-semibold text-3xl bottom-45 ml-250'>Score: {score}</h1>
        <h1 className='absolute text-white font-semibold text-3xl bottom-33 ml-250'>Highscore: {highScore}</h1>

        <button className='text-black bg-white ml-198 font-semibold text-3xl px-3 py-2 absolute bottom-15 cursor-pointer transition-transform hover:bg-amber-50'
        onClick={reset}
        >Reset Highscore</button>

      </div>
    </>
  )
}

export default App
