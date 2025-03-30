import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';


const MyOrders = () => {
    const { orders, products } = useContext(ShopContext); // Access orders and products from context

    // Helper function to get product details by ID
    const getProductDetails = (productId) => {
        return products ? products.find((product) => product._id === productId) : null;
    };

    return (
        <div>
            <div className="bg-[#f6fcf0] m-14 mt-8">
                <div className="max-padd-container py-10">
                    <Title title1="MyOrder" title2="List" />
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
                                <p className="text-gray-600">Date: {new Date(order.date).toLocaleString()}</p>
                                <p className="text-gray-600">
                                    Total Amount: <strong>₹{order.totalAmount}</strong>
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Payment Method: <strong>{order.paymentMethod}</strong>
                                </p>

                                <h4 className="text-md font-medium mb-2">Order Items:</h4>
                                <ul>
                                    {order.items.map((item) => {
                                        const productDetails = getProductDetails(item._id);
                                        return (
                                            <li
                                                key={item._id}
                                                className="flex items-center mb-4 border-b pb-4"
                                            >
                                                {productDetails && productDetails.image && (
                                                    <img
                                                        src={productDetails.image}
                                                        alt={productDetails.name}
                                                        className="w-16 h-16 mr-4"
                                                    />
                                                )}
                                                <div>
                                                    <p className="font-medium">
                                                        {productDetails?.name || `Product ID: ${item._id}`}
                                                    </p>
                                                    <p>Quantity: {item.quantity}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-xl">No order place!</p>
                    )}
                </div>
            </div>
            <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
        </div>
    );
};

export default MyOrders;