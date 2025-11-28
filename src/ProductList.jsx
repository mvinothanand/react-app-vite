import Item from './Item';
import { useState } from 'react';

export default function ProductList() {
    const [theme, setTheme] = useState('light');

    return(
        <div className="flex justify-center w-xl py-20 px-5">
            <div className={`flex flex-col gap-2 w-2xl justify-center h-full border ${theme === 'light' ? 'bg-white' : 'bg-slate-800'} border-slate-600`}>
                
                <ul className="flex flex-col p-2 m-4 gap-2">
                    <Item 
                        code="1" 
                        name="Hamam Soap"
                        quantity="100"
                    ></Item>
                    <Item 
                        code="2" 
                        name="Coffee Powder"
                        quantity="10"
                    ></Item>
                    <Item 
                        code="3" 
                        name="Tata Tea"
                        quantity="0"
                    ></Item>
                </ul>
                <div className="w-full p-4">
                    <button 
                        type="button" 
                        className={`${ theme === 'light' ? 'bg-white text-black' : 'bg-slate-800 text-white'} border border-slate-600 p-2`}
                        onClick={ () => theme === 'light' ? setTheme('dark') : setTheme('light')}
                        >
                            {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                        </button>
                </div>
            </div>
        </div>
    )
}