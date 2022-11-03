import './order.scss';

const OrderField = (props) => {
    const handleClick = (event) => {
        if (event.target.value === "0") {
            event.target.value = '';
        }
    }
    return (
        <div className="order-field">
            <label className="label">{`${props.name}:`}</label>
            <input className='value' value={props.value} onClick={handleClick} onChange={props.handleChange} size={10}></input>
        </div>
    );
}

export default OrderField;