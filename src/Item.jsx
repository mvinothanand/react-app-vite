export default function Item({code, name, quantity}){
    const qty = parseInt(quantity)
    let quantityStyling = "bg-slate-50 px-2 basis-1/3";

    if (qty < 20 && qty > 0) {
        quantityStyling = "bg-amber-200 px-2 basis-1/3 text-amber-700 font-bold";
    }

    if (qty === 0) {
        quantityStyling = "bg-red-400 px-2 basis-1/3 text-red-800 font-bold";
    }

    if (qty > 0) {
        return(
            <li className="p-2 flex flex-row gap-2">
                <p className=" bg-slate-50 px-2 basis-1/3">{code}</p>
                <p className="bg-slate-50 px-2 basis-2/3">{name}</p>
                <p className={quantityStyling}>{quantity}</p>
            </li>        
        )        
    } else {
        return null;
    }
}