function Welcome({ name, age, gender }) {
    return (
        <>
            <h2>Welcome to the course!</h2>
            <ParticipantDetails name={name} age={age}/>
        </>
    )
}

function ParticipantDetails({ name, age }) {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Welcome


