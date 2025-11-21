export default function Card(props) {

    const cardStyle = {
        border: "1px solid gray", 
        padding: '16px', 
        margin: '10px', 
        borderRadius: '8px', 
        backgroundColor: 'lightblue',
        width: '800px',
        height: '400px'
    }

    return (
        <div style={cardStyle}>
            {props.children}
        </div>
    )
}