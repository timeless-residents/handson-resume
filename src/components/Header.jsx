import React from 'react';

interface HeaderProps {
   name: string;
   title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
   return (
      <header className="text-center py-8">
         <h1 className="text-4xl font-bold">{name}</h1>
         <p className="text-gray-600">{title}</p>
      </header>
   );
};

export default Header;