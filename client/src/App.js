import React, { useEffect, useState } from 'react';
import './App.css';
import { RouterApp } from './routes/index.js';
import { motion } from 'framer-motion';

function App() {
  
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {showLogo ? (
        
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 2 }}
      >
        {
          <div className='logo-container' style={{ background: '#263439' }}>
            <img src="https://i.imgur.com/ae0Tsfu.png" alt="Logo" className="logo" />
          </div>
        }
      </motion.div>
        
      ) : (
        <RouterApp />
      )}
    </div>
  );
}
export default App;