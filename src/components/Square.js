const Square = (props) => {

    return (
        <div>
            <button className="ui square" onClick={props.onClick}>
                Value: {props.value}
            </button>
        </div>
    )
}

export default Square