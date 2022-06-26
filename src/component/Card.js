const Card = (props) => {
    return (
        <div style={{ backgroundColor: "white", color: "black", width: "300px", borderRadius: 5, margin: 5 }}>
            this is {props.name}
        </div>
    )
}

export default Card;