import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalogo?busca=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          <Link to="/" className="text-4xl font-bold text-blue-600 mb-4 hover:text-blue-700 transition-colors duration-300">
            Therian
          </Link>
          
          <nav className="flex items-center justify-between w-full">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Início
              </Link>
              <Link to="/catalogo" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Catálogo
              </Link>
              <Link to="/catalogo?categoria=felinos" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Felinos
              </Link>
              <Link to="/catalogo?categoria=caninos" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Caninos
              </Link>
              <Link to="/catalogo?categoria=ursos" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Ursos
              </Link>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Buscar fantasias..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 border-2 border-blue-200 focus:border-blue-500 rounded-full"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 rounded-full bg-blue-500 hover:bg-blue-600"
                >
                  <Search size={16} />
                </Button>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2 hover:bg-blue-50">
                <User size={20} />
                <span className="text-sm">Entrar</span>
              </Button>
              
              <Link to="/favoritos" className="relative">
                <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                  <Heart size={20} />
                  {favorites.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-5 h-5 flex items-center justify-center rounded-full">
                      {favorites.length}
                    </Badge>
                  )}
                </Button>
              </Link>
              
              <Link to="/carrinho" className="relative">
                <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                  <ShoppingCart size={20} />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1 min-w-5 h-5 flex items-center justify-center rounded-full">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;