// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
          api_key: 'live_HBuuXBi8sFjlDp5BNLjAa0Dp83IJghXwwCaXIswcRObUgPc1W7L16kjhPFffkJnO',
        },
      });
      setCatData(response.data[0]);
    } catch (error) {
      console.error('Error fetching cat data:', error);
    }
  };

  const handleNextCat = () => {
    fetchData();
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1 className="navbar-title">Kočkyyyy</h1>
        </nav>
      </header>
      <main>
        <div className="gallery-container">
          <div className="gallery-title"></div>
          <div className="cat-card">
            {catData && <img src={catData.url} alt="Náhodná kočka" className="cat-image" />}
          </div>
          <button onClick={handleNextCat} className="next-button">Další</button>
        </div>
      </main>
    </div>
  );
};

export default App;
