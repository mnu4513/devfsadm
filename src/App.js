import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeContext from './components/ThemeContext';
import Footer from './components/Footer';


const App = () => {

  const [theme, setTheme] = useState(useContext(ThemeContext));

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }} >
      <div className={`${theme.value} text-gray-700 dark:bg-gray-800 dark:text-white`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;