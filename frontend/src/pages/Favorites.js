import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-gray-400">
            <Heart size={120} className="mx-auto mb-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-600">Nenhum favorito ainda</h2>
          <p className="text-gray-500 text-lg max-w-md">
            Explore nosso catálogo e clique no coração dos produtos que você mais gosta para salvá-los aqui!
          </p>
          <Link to="/catalogo">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              <ShoppingBag className="mr-2" size={20} />
              Explorar Produtos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/catalogo" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200">
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao Catálogo
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
            <Heart className="mr-3 text-red-500" size={40} />
            Meus Favoritos
          </h1>
          <p className="text-gray-600 text-lg">
            {favorites.length} {favorites.length === 1 ? 'produto favorito' : 'produtos favoritos'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <div className="absolute top-2 left-2 z-10">
                <div className="bg-red-500 text-white p-1 rounded-full shadow-lg">
                  <Heart size={16} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Gostou dos seus favoritos?</h3>
          <p className="text-gray-600 mb-6">
            Que tal adicionar alguns deles ao carrinho e finalizar sua compra?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/carrinho">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Ver Carrinho
              </Button>
            </Link>
            <Link to="/catalogo">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Continuar Explorando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;