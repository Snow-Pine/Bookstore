import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Cart = (props) => {
    const [showTotalPrice, setShowTotalPrice] = useState(false);

    const handleAdd = (index) => {
        const updatedCart = props.addCart.map((item, idx) => {
            if (index === idx) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        props.setNewCart(updatedCart);
    };

    const handleMinus = (index) => {
        const updatedCart = props.addCart.map((item, idx) => {
            if (index === idx && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        props.setNewCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        props.addCart.forEach(item => {
            const price = parseFloat(item.price);
            const quantity = parseInt(item.quantity);
            if (!isNaN(price) && !isNaN(quantity)) {
                totalPrice += price * quantity;
            }
        });
        return totalPrice.toFixed(2);
    };

    const handleCheckout = () => {
        setShowTotalPrice(true);
    };

    return (
        <div className='cart'>
            <h2>Cart</h2>
            <ListGroup>
                {props.addCart.map((item, index) => (
                    item.quantity > 0 && (
                        <ListGroup.Item key={index}>
                            <b>{item.title}</b> - ${item.price} - Quantity: 
                            <Button variant="light" onClick={() => handleMinus(index)}>-</Button>
                            {item.quantity}
                            <Button variant="light" onClick={() => handleAdd(index)}>+</Button>
                        </ListGroup.Item>
                    )
                ))}
            </ListGroup>
            <br/>   
            {!showTotalPrice && (
                <Button variant="success" onClick={handleCheckout}>Check out</Button>
            )}
            {showTotalPrice && (
                <div>
                <br/>
                <h3>Checkout</h3>
                <p>Thank you for shopping with us!</p>
                <p>Total Price: <b>${calculateTotalPrice()}</b></p>
                </div>
            )}
        </div>
    );
};

export default Cart;