import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';


const PlaceOrder = () => {
    const navigate = useNavigate();
    const { cartItems, setCartItems, getCartAmount, addOrder } = useContext(ShopContext);
    const [method, setMethod] = useState('');
    const totalAmount = getCartAmount();

    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        if (Object.keys(cartItems).length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const newOrder = {
            _id: Date.now(),
            items: Object.entries(cartItems).map(([id, quantity]) => ({
                _id: id,
                name: `Product ${id}`,
                quantity,
            })),
            totalAmount,
            paymentMethod: method,
            deliveryDetails: formDetails,
            date: new Date().toString(),
        };

        addOrder(newOrder);
        setCartItems({});
        toast.success('Navigating to order details!',{autoClose :2000} );
        navigate('/orders');
    };

    return (
        <div>
            <div className="bg-[#f6fcf0] m-14 mt-8">
                <form onSubmit={handlePlaceOrder} className="max-padd-container py-10">
                    <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
                        <div className="flex flex-1 flex-col gap-3 text-[95%]">
                            <Title title1={'Delivery'} title2={'Information'} />
                            {/* Delivery Information Inputs */}
                            <div className='flex gap-3'>
                                <input type="text" name="firstName" placeholder="First Name" required value={formDetails.firstName} onChange={handleInputChange}
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2" />

                                <input type="text" name='lastName' placeholder='Last Name' required value={formDetails.lastName} onChange={handleInputChange}
                                    className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
                            </div>
                            <input type="text" name='email' placeholder='Email' required
                                className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none' />
                            <input type="text" name='phone' placeholder='Phone Number' required
                                className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none' />
                            <input type="text" name='street' placeholder='Street' required
                                className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none' />
                            <div className='flex gap-3'>
                                <input type="text" name='city' placeholder='City' required
                                    className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
                                <input type="text" name='state' placeholder='State' required
                                    className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
                            </div>
                            <div className='flex gap-3'>
                                <input type="number" name='zipcode' placeholder='Zip Code' required
                                    className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
                                <input type="text" name='country' placeholder='Country' required
                                    className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <CartTotal />
                            <div className="my-6">
                                <h3 className="bold-20 mb-5">
                                    Payment{' '}
                                    <span className="text-[#00DD00]">Method</span>
                                    <p className='mt-6'>Select the payment method</p>
                                </h3>
                                <div className="flex gap-3 mt-6">
                                    <div
                                        onClick={() => setMethod('online')}
                                        className={`${method === 'online' ? 'btn-dark' : 'btn-white'
                                            } !py-1 text-xs cursor-pointer`}
                                    >
                                        Online
                                    </div>
                                    <div
                                        onClick={() => setMethod('cod')}
                                        className={`${method === 'cod' ? 'btn-dark' : 'btn-white'
                                            } !py-1 text-xs cursor-pointer`}
                                    >
                                        Cash on Delivery
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn-secondary">
                                    Order details
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
        </div>
    );

};

export default PlaceOrder;