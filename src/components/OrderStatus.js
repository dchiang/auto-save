import './order.scss';

const OrderStatus = (props) => {
    return (
        <label className='order-status'>{props.text}</label>
    );
}
export default OrderStatus;