import { useRef, useState } from 'react';

export default function ClickCounter() {
    const count = useRef(0);
    const [ currentCount, setCurrentCount ] = useState(count.current);

    const handleClick = () => {
        count.current += 1;
        console.log(`Number of clicks: ${count.current}`);
        setCurrentCount(count.current);
    }

    return (
        <div className="flex flex-col gap-10">
            <p className="font-bold text-2xl">Num of clicks (ref): {count.current}</p>
            <p className="font-bold text-2xl">Num of clicks (state): {currentCount}</p>
            <button onClick={handleClick} className="bg-blue-600 p-4 w-md">Click Me!</button>
        </div>
    )
}