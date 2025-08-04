import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../hooks/use-toast';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      addItem(product);
      toast({
        title: "Produto adicionado!",
        description: `${product.name} foi adicionado ao carrinho.`,
      });
    }
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
    toast({
      title: isFavorite(product.id) ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `${product.name} ${isFavorite(product.id) ? 'foi removido dos' : 'foi adicionado aos'} seus favoritos.`,
    });
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white border-2 border-blue-100 hover:border-blue-300">
      <Link to={`/produto/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.discount && (
              <Badge className="bg-red-500 text-white text-xs font-bold">
                -{discountPercentage}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="text-xs">
                Esgotado
              </Badge>
            )}
          </div>

          <Button
            onClick={handleToggleFavorite}
            variant="ghost"
            size="sm"
            className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 ${
              isFavorite(product.id)
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart size={16} fill={isFavorite(product.id) ? 'currentColor' : 'none'} />
          </Button>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${
                !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ShoppingCart size={16} className="mr-2" />
              {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-blue-600">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;