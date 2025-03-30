import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import login from '../assets/login.webp';

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(ShopContext); 
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === "Login") {
      // Simulate successful login
      setToken("mock-token"); // Simulate setting a token
      setUser({ name: formData.name });
      alert(`Welcome back, ${formData.email}!`);
      navigate('/'); // Redirect to the homepage after login
    } else {
      // Simulate successful sign-up
      alert(`Account created successfully for ${formData.name}!`);
      setCurrState("Login"); // Switch to Login view
    }
  };

  return (
    <div className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      <div className='flex h-full w-full'>

        <div className='w-1/2 hidden sm:block'>
          <img src={login} alt="LoginImg" className='object-cover h-full w-full' />
        </div>

        {/* Form side */}
        <div className='flex w-full sm:w-1/2 items-center justify-center text-[90%]'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5'>
            <div className='w-full mb-4'>
              <h3 className='bold-36 text-[#00DD00]'>{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className='w-full'>
                <label htmlFor="name" className='medium-15'>Name</label>
                <input type="text" name="name" placeholder='Name' required
                  className='w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-[#f6fcf0] mt-1'
                  value={formData.name} onChange={handleInputChange}  />
              </div>
            )}
            <div className='w-full'>
              <label htmlFor="email" className='medium-15'>Email</label>
              <input type="email" name="email" placeholder='Email' required
                className='w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-[#f6fcf0] mt-1'
                value={formData.email} onChange={handleInputChange} />
            </div>
            <div className='w-full'>
              <label htmlFor="password" className='medium-15'>Password</label>
              <input type="password" name="password" placeholder='Password' required
                className='w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-[#f6fcf0] mt-1'
                value={formData.password}  onChange={handleInputChange} />
              </div>
            <button type="submit" className='btn-secondary w-full mt-5 !py-[8px] !rounded'>
              {currState === "Sign Up" ? 'Sign up' : 'Login'}
            </button>
            <div className='w-full flex flex-col gap-y-3'>
              <div className='underline medium-15'>Forgot your password?</div>
              {currState === "Login" ? (
                <div className='underline medium-15'>
                  Don't have an account? <span onClick={() => setCurrState('Sign Up')} className='cursor-pointer'>Create account</span>
                </div>
              ) : (
                <div className='underline medium-15'>
                  Already have an account? <span onClick={() => setCurrState('Login')} className='cursor-pointer'>Login</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;