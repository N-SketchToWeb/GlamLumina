import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { FaRegWindowClose } from 'react-icons/fa';
import { TbBasket } from 'react-icons/tb';

const Favorites = () => {
    const { products, currency, favorites, addToCart, getFavoritesCount, removeFromFavorites, navigate } = useContext(ShopContext);
    const [favoriteData, setFavoriteData] = useState([]);

    const handleRemoveFromFavorites = (id) => {
        removeFromFavorites(id);
        setFavoriteData(favoriteData.filter(item => item._id !== id));
    };

    useEffect(() => {
        if (products.length > 0 && favorites.length > 0) {
            const tempData = favorites.map(favId => products.find(product => product._id === favId)).filter(Boolean);
            setFavoriteData(tempData);
        }
    }, [favorites, products]);

    return (
        <div>
            <div className="bg-[#f6fcf0] m-14 mt-8">
                <div className="max-padd-container py-10">
                    <div className="flexStart gap-x-4">
                        <Title title1="Favorite" title2="Items" title1Styles="h3" />
                        <h5 className="medium-15 text-gray-30 relative top-1.5">
                            ({getFavoritesCount()} Items)
                        </h5>
                    </div>

                    <div className="mt-6">
                        {favoriteData.map((item) => (
                            <div key={item._id} className="rounded-lg bg-white p-2 mb-3">
                                <div className="flex items-center gap-x-3">
                                    <div className="flex items-start gap-6">
                                        <img src={item.image[0]} alt="productImg" className="w-16 sm:w-18 rounded" />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div className="flexBetween">
                                            <h5 className="h5 !my-0 line-clamp-1">{item.name}</h5>
                                            <FaRegWindowClose
                                                onClick={() => handleRemoveFromFavorites(item._id)}
                                                className="cursor-pointer text-[#00DD00]" />
                                        </div>
                                        <div className="flexBetween">
                                            <h4 className="h4">{currency}{item.price}</h4>
                                            <button onClick={() => addToCart(item._id)} className="btn-secondary" >
                                                Add to Bag <TbBasket className="inline ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {favoriteData.length === 0 && (
                        <div className="text-center py-10">
                            <p className="medium-15 text-gray-500">No favorite items yet!</p>
                            <button onClick={() => navigate('/')} className="btn-secondary mt-4">
                            Continue Shopping
                            </button>
                        </div>
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

export default Favorites;
