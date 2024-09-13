// src/components/Cart.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Cart = () => {
    // Cart logic here
    return (
        <Container className="text-center mt-4">
            <h2>Your Cart</h2>
            {/* Cart items will be rendered here */}
            <Button variant="primary">Checkout</Button>
        </Container>
    );
};

export default Cart;
