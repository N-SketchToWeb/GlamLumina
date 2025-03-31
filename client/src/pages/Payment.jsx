import React, { useState } from 'react'; 
import axios from 'axios';
import Title from '../components/Title';


const Payment = () => {

  const [paymentUrl, setPaymentUrl] = useState(null);
  const BASE_URL = import.meta.env.VITE_URL; // ✅ Use env variable


  const handlePayment = async () => {
    
    const data = {
      name: "Nandita Nilajagi",
      mobileNumber: 1234567890,
      amount: 100,
    }
    try {
      const response = await axios.post(`${BASE_URL}/create-order`, data)
      setPaymentUrl(response.data.url);
    } catch (error) {
      console.log("error in payment", error)
    }
  }

  return (
    <div>
      <Title />
      <div className="flex flex-col items-center justify-center ">
        <div className=" bg-purple-100 rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center h-[1100px] w-[450px]  ">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-2 mt-6">PhonePay</h1>
          <p className="text-xl text-gray-600 mb-4 text-center">Complete your payment and enjoy your purchase!</p>
          <div className="space-y-4 w-full">
            <button onClick={handlePayment}
              className="w-full p-3  bg-purple-500 text-white font-bold rounded-lg shadow-md transition-all transform hover:bg-purple-600 hover:scale-105 focus:outline-none ">
              Pay Now
            </button>
            {paymentUrl && (
              <div className="mt-6 w-full">
                <iframe src={paymentUrl} width="100%" height="800px" frameBorder="0" title="Payment Gateway"></iframe>
              </div>
            )}
            <div className="w-full text-center ">
              <p className="text-sm text-gray-500">Secure Payment Gateway</p>
            </div>
          </div>
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

export default Payment;