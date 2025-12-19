import './index.css';
import FormComponent from './FormComponent';
import ClickCounter from './ClickCounter';
import ValueTracker from './ValueTracker';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-slate-200 h-full rounded-md">
      <ValueTracker inputValue={counter}/>
      <button 
        className="bg-blue-400 wd-xl font-bold p-5"
        onClick={() => setCounter(counter + 1)}
      >
          Increment
      </button>
    </div>
  )
}

export default App
