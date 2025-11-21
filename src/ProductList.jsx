import Item from './Item';

export default function ProductList() {
    return(
        <div className="flex flex-col w-2xl justify-center bg-slate-800">
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
        </div>
    )
}