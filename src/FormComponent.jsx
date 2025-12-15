import { useState, useEffect } from 'react';

export default function FormComponent() {
    const [ formInputs, setFormInputs ] = useState({
        productName: '',
        productCode: '',
        mrp: '',
        quantity: '',
        discount: ''
    });

    const [ count, setCount ] = useState(0);

    useEffect(() => {
            console.log(`Form component loaded!`);
    }, []);

    useEffect(() => {
        console.log('Product Code is changed to ', formInputs.productCode);
    }, [formInputs.productCode])


    return (
        <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-5 justify-center p-10">
                <h1 className="font-bold text-xl">Product Details Form</h1>
                <form className="w-3xl p-5 border rounded-md grid grid-cols-2 gap-5">
                    <div>
                        <label className="pr-2 font-bold">
                            Product Name
                        </label>
                        <input 
                            type="text" 
                            className="ml-2 border border-black rounded-md "
                            value={formInputs.productName}
                            onChange={(e) => setFormInputs( (prev) => ({ ...prev, productName: e.target.value}))}
                        >
                        </input>
                    </div>
                    <div>
                        <label className="pr-2 font-bold">
                            Product Code
                        </label>
                        <input 
                            type="text" 
                            className="ml-2 border border-black rounded-md "
                            value={formInputs.productCode}
                            onChange={ (e) => setFormInputs( (prev) => ({ ...prev, productCode: e.target.value })) }
                        >
                        </input>
                    </div>                
                    <div>
                        <label className="pr-2 font-bold">
                            MRP
                        </label>
                        <input 
                            type="number" 
                            className="ml-2 border border-black rounded-md "
                            value={formInputs.mrp}
                            onChange={ (e) => setFormInputs((prev) => ({ ...prev, mrp: e.target.value})) }
                        >
                        </input>
                    </div>                
                    <div>
                        <label className="pr-2 font-bold">
                            Discount
                        </label>
                        <input 
                            type="number" 
                            className="ml-2 border border-black rounded-md "
                        >
                        </input>
                    </div>                
                    <div>
                        <label className="pr-2 font-bold">
                            Quantity
                        </label>
                        <input 
                            type="number" 
                            className="ml-2 border border-black rounded-md "
                        >
                        </input>
                    </div>                

                </form>
            </div>
            <div className="flex flex-col gap-5 justify-center p-10">
                <h1 className="font-bold text-xl">Review Form Inputs</h1>
                <div className="w-3xl p-5 border rounded-md flex flex-col gap-5">
                    <div className="border-b border-blue-500 p-2 flex flex-col gap-4">
                        <p className="font-bold">Product Name: </p>
                        <p>{formInputs.productName}</p>
                    </div>
                    <div className="border-b border-blue-500 p-2 flex flex-col gap-4">
                        <p className="font-bold">Product Code: </p>
                        <p>{formInputs.productCode}</p>
                    </div>                    
                    <div className="border-b border-blue-500 p-2 flex flex-col gap-4">
                        <p className="font-bold">MRP: </p>
                        <p>{formInputs.mrp}</p>
                    </div>                    

                </div>
            </div>
        </div>
    )
}