import { useRef, useEffect } from 'react';

export default function ValueTracker({ inputValue }) {
    const prevValue = useRef();

    useEffect(() => {
        prevValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <p>Current Value is: {inputValue}</p>
            <p>Previous value was: {prevValue.current}</p>
        </>
    )
}