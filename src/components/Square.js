const Square = (props) => {

    return (
        <div>
            <button className="ui square" onClick={props.onClick}>
                Square {props.value}
            </button>
        </div>
    )
}

export default Square