import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products} from '../assets/data'; 
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    const currency = "₹";
    const delivery_charges = 10;
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(true)
    const [token, setToken] = useState('dummy token');
    const [cartItems, setCartItems] = useState({})
    const [favorites, setFavorites] = useState([])
    const [orders, setOrders] = useState([]);
    

    //Adding items to cart
    const addToCart = async (itemId)=>{

        const cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData)
        toast.success("Item added to cart!",{autoClose:1000});
    }

    //Get cart count
    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    //Updating the quantity
    const updateQuantity = async (itemId, quantity) =>{
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity
        setCartItems(cartData)
    }

    //Getting total cart amount
    const getCartAmount = ()=>{
        let totalAmount = 0;
        if (!products || !cartItems) return totalAmount;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
    
            if (itemInfo && cartItems[itemId] > 0) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;    
    }

    // Adding items to favorites
    const addToFavorites = (itemId) => {
    if (favorites.includes(itemId)) {
        toast.info("Item already in favorites!");
        return; 
    }
    setFavorites((prev) => [...prev, itemId]);
    toast.success("Item added to favorites!");
    };

    // Get favorite count
    const getFavoritesCount = () => {
        return favorites.length;
    };

    //Removing items from favorite
    const removeFromFavorites = (itemId) => {
        setFavorites((prev) => prev.filter((id) => id !== itemId));
        toast.info("Item removed from favorites!");
    };

    const handleRemoveFromFavorites = (id) => {
        removeFromFavorites(id);
        setFavoriteData(favoriteData.filter(item => item._id !== id));// Update local favoriteData to trigger re-render
    };

    //Order list display
    const addOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };


    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token); // Save token to localStorage
        } else {
            localStorage.removeItem('token'); // Remove token if null
        }
    }, [token]);

    const logout = () => {
        setUser(null);
        setToken(null);
        navigate('/login');
        toast.info("You have been logged out.");
    };

    const login = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
        toast.success(`Welcome back, ${userData.name}!`);
        navigate('/');
    };

    const value = {logout,login,orders,addOrder, user, setUser, currency, delivery_charges, navigate, products, token, setToken, search, setSearch, showSearch, setShowSearch,
        addToCart, getCartCount, cartItems, setCartItems, updateQuantity, getCartAmount,addToFavorites, getFavoritesCount, favorites, removeFromFavorites, handleRemoveFromFavorites };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;