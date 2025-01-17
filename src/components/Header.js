import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="paris_saint_germain.png" alt="Logo" className="h-15 w-20 mr-2" />
        <h1 className="text-lg font-bold">Congé Mahery Razakandraina</h1>
      </div>
      <div className="flex items-center">
        <img src="dembele.jpg" alt="User" className="h-12 w-12 rounded-full mr-2" />
        <button className="bg-blue-500 px-4 py-2 rounded">Déconnexion</button>
      </div>
    </header>
  );
};

export default Header;
