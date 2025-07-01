import React, { useState } from 'react';
import './FavouriteStore.css';
import Zaralogo from '../images/Zaralogo.jpg';
import HMlogo from '../images/H&Mlogo.jpg';
import Forever21logo from '../images/Forever21logo.jpg';
import Guccilogo from '../images/Guccilogo.jpg';
import Pradalogo from '../images/Pradalogo.jpg';
import Adidaslogo from '../images/Adidaslogo.jpg';
import Diorlogo from '../images/Diorlogo.jpg';
import LouisVuittonlogo from '../images/LouisVuittonlogo.jpg';
import Burberrylogo from '../images/Burberrylogo.jpg';
import Chanellogo from '../images/Chanellogo.jpg';
import Nikelogo from '../images/Nikelogo.jpg';

const stores = [
  { id: 1, name: 'Zara', logo: Zaralogo },
  { id: 2, name: 'H&M', logo: HMlogo },
  { id: 3, name: 'Forever 21', logo: Forever21logo },
  { id: 4, name: 'Gucci', logo: Guccilogo },
  { id: 5, name: 'Prada', logo: Pradalogo },
  { id: 6, name: 'Adidas', logo: Adidaslogo },
  { id: 7, name: 'Dior', logo: Diorlogo },
  { id: 8, name: 'Louis Vuitton', logo: LouisVuittonlogo },
  { id: 9, name: 'Burberry', logo: Burberrylogo },
  { id: 10, name: 'Chanel', logo: Chanellogo },
  { id: 11, name: 'Nike', logo: Nikelogo },

];

const FavouriteStore = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [favourites, setFavourites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleWishlist = (store) => {
    const exists = favourites.find((fav) => fav.id === store.id);
    if (!exists) {
      setFavourites([...favourites, store]);
    } else {
      setFavourites(favourites.filter((fav) => fav.id !== store.id));
    }
  };

  const filteredStores = (activeTab === 'all' ? stores : favourites).filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fav-store-container">
      <div className="tabs">
        <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All Stores</button>
        <button className={activeTab === 'fav' ? 'active' : ''} onClick={() => setActiveTab('fav')}>My Stores</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a store..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="store-list">
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => {
            const isWishlisted = favourites.find(fav => fav.id === store.id);
            return (
              <div key={store.id} className="store-card">
                <img src={store.logo} alt={store.name} />
                <h4>{store.name}</h4>
                {activeTab === 'all' && (
                  <button
                    className={isWishlisted ? 'wishlisted' : ''}
                    onClick={() => toggleWishlist(store)}
                  >
                    {isWishlisted ? '💖 Wishlisted' : '🤍 Wishlist'}
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>No stores found.</p>
        )}
      </div>
    </div>
  );
};

export default FavouriteStore;
