import { useState } from 'react';

export default function Item({code, name, quantity}){

    const [quantityStyling, setQuantityStyling] = useState("bg-slate-50 px-2 basis-1/3");
    
    const qty = parseInt(quantity);
    
    // if (qty < 20 && qty > 0) {
    //     setQuantityStyling("bg-amber-200 px-2 basis-1/3 text-amber-700 font-bold");
    // }

    // if (qty === 0) {
    //     setQuantityStyling("bg-red-400 px-2 basis-1/3 text-red-800 font-bold");
    // }

    return (
        <li className="p-2 flex flex-row gap-2">
            <p className=" bg-slate-50 px-2 basis-1/3">{code}</p>
            <p className="bg-slate-50 px-2 basis-2/3">{name}</p>
            <p className={quantityStyling}>{quantity}</p>
        </li>        
    )
}