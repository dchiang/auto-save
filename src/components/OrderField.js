const OrderField = (props) => {
    const handleClick = (event) => {
        if (event.target.value === "0") {
            event.target.value = '';
        }
    }
    return (
        <div>
            <label style={{ textAlign: "right", marginRight: 10 }}>{`${props.name}:`}</label>
            <input value={props.value} onClick={handleClick} onChange={props.handleChange} size={10} style={{ textAlign: "right" }}></input>
        </div>
    );
}

export default OrderField;