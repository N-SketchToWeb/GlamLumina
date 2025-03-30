import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';


const Orders = () => {
    const { orders, products } = useContext(ShopContext);
    const navigate = useNavigate();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const currency = "₹";

    useEffect(() => {
        console.log("Orders:", orders); // Debug: Log orders to check structure
        console.log("Products:", products); // Debug: Log products to check availability
    }, [orders, products]);

    // Get product details by ID
    const getProductDetails = (productId) => {
        return products ? products.find((product) => product._id === productId) : null;
    };

    // Navigate to payment page
    const handlePayment = (order) => {
        localStorage.setItem('pendingOrder', JSON.stringify(order)); // Save the order in localStorage
        navigate('/payment'); // Navigate to payment page
    };

    const handlePlaceOrder = (orderId) => {
        setOrderSuccess(true); // Set order success to true to display message
        setTimeout(() => {
            setOrderSuccess(false); // Hide the success message after 2 seconds
            navigate('/');
        }, 2000);
    };



    return (
        <div>
            <div className="bg-[#f6fcf0] m-14 mt-8">
                <div className="max-padd-container py-10">
                    <Title title1="Order" title2="Details" />
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white p-4 rounded-lg shadow-md mb-4"
                            >
                                <h3 className="h5 text-[18px]">Order ID: {order._id}</h3>
                                <ul>
                                    {order.items.map((item) => {
                                        const productDetails = getProductDetails(item._id);
                                        const key = item._id || `${item._id}-${Math.random()}`;
                                        return (
                                            <li key={key} className="flex items-center">
                                                {productDetails && productDetails.image && (
                                                    <img
                                                        src={productDetails.image}
                                                        alt={productDetails.name}
                                                        className="w-16 h-16 mr-6 mb-4"
                                                    />
                                                )}
                                                {productDetails ? (
                                                    <>
                                                        <ul>
                                                            <li>{productDetails.name}</li>
                                                            Quantity: {item.quantity}
                                                        </ul>
                                                    </>
                                                ) : (
                                                    `Product with ID ${item._id} not found`
                                                )}
                                            </li>
                                        );
                                    })}

                                </ul>
                                <h4 className="h4">
                                    Total Amount : {currency}
                                    {order.totalAmount}
                                </h4>
                                <p>Date: {order.date}</p>
                                <p className="mb-2">
                                    Payment Method: {order.paymentMethod}
                                </p>

                                {/* Display the payment button if the payment method is online */}

                                {order.paymentMethod === "online" ? (
                                    <button
                                        className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                                        onClick={() => handlePayment(order)} // Navigate to payment
                                    >
                                        Pay Now
                                    </button>
                                ) : (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="btn-secondary"
                                            onClick={() => handlePlaceOrder(order._id)} // Handle placing order
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No orders.</p>
                    )}
                </div>
            </div>
            {orderSuccess && (
                <div className="fixed top-5 right-5 bg-green-100 text-green-800 p-4 rounded-md shadow-md">
                    Your order has been placed!
                </div>
            )}
            <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
        </div>
    );
};

export default Orders;