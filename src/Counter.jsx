import { useState } from 'react';

export default function Counter() {
    const [ number, setNumber ] = useState(0);


    function handleClick() {
        setNumber(number + 1);
        setTimeout(() => {
            alert(`The number is ${number}`);
        }, 2000);
    }

    return (
        <div className="m-4 flex flex-row gap-3 justify-center w-md bg-amber-700 p-4">
            <p>{number}</p>
            <button 
                className="bg-slate-300 w-12"
                onClick={handleClick}
            >
                    +3
            </button>
        </div>
    )
}