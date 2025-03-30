import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaMailBulk, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Title from '../components/Title'

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!");
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="bg-[#f6fcf0] p-6 mt-10">
      <div className="flexStart gap-x-4 ml-10">
        <Title title1={'Contact'} title2={'Us'} title1Styles={'h3'} />
      </div>
      {/* Header Section */}
      <div className="max-padd-container py-10 bg-[#a5fc48a8] rounded-lg">
        <h1 className="h3 text-gray-800 text-center mb-4">Friendly and Warm</h1>
        <p className="text-gray-600 text-center text-xl mb-6">
          Don’t hesitate to reach out! We’re here to help. Send us a message, and we’ll respond as soon as possible
        </p>
      </div>

      {/* Contact Form Section with Divider */}
      <div className="max-padd-container my-12 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Section: Contact Form */}
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg">
          <h4 className="h4 text-gray-800 mb-6">Get in Touch</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="py-3 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Send
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-gray-300 h-full"></div>

        {/* Right Section: Contact Information */}
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg">
          <h4 className="h4 text-gray-800 mb-6">Our Contact Information</h4>
          <div className="flex items-start gap-6 mb-4">
            <FaMapMarkerAlt className="text-green-600 text-3xl" />
            <div>
              <h5 className="h5 text-gray-800">Location</h5>
              <p className="text-gray-600">Belagavi, Karnataka</p>
            </div>
          </div>
          <div className="flex items-start gap-6 mb-4">
            <FaPhone className="text-green-600 text-3xl" />
            <div>
              <h5 className="h5 text-gray-800">Phone</h5>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <FaMailBulk className="text-green-600 text-3xl" />
            <div>
              <h5 className="h5 text-gray-800">Email Support</h5>
              <p className="text-gray-600">info@glamlumina.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-padd-container bg-[#a5fc48d0] py-6 mt-12 rounded-lg text-center">
        <p className="text-gray-600">
          © 2024 GlamLumina. All rights reserved. Designed by Nandita Nilajagi.
        </p>
      </div>
    </div>
  );
};

export default Contact;
