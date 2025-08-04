import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../hooks/use-toast';
import { mockProducts } from '../mock';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toast } = useToast();

  const product = mockProducts.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Produto não encontrado</h2>
          <Link to="/catalogo">
            <Button>Voltar ao Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: "Produto adicionado!",
      description: `${quantity}x ${product.name} ${quantity === 1 ? 'foi adicionado' : 'foram adicionados'} ao carrinho.`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    toast({
      title: isFavorite(product.id) ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `${product.name} ${isFavorite(product.id) ? 'foi removido dos' : 'foi adicionado aos'} seus favoritos.`,
    });
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/catalogo" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200">
          <ArrowLeft className="mr-2" size={20} />
          Voltar ao Catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg font-bold px-3 py-1">
                  -{discountPercentage}% OFF
                </Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Produto Esgotado
                  </Badge>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <Badge className="bg-green-500 text-white">
                    Economize R$ {(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-medium">Quantidade:</label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  <ShoppingCart className="mr-2" size={20} />
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Produto Esgotado'}
                </Button>
                <Button
                  onClick={handleToggleFavorite}
                  variant="outline"
                  className={`px-6 py-3 ${
                    isFavorite(product.id)
                      ? 'bg-red-500 text-white border-red-500 hover:bg-red-600'
                      : 'border-red-500 text-red-500 hover:bg-red-50'
                  }`}
                >
                  <Heart size={20} fill={isFavorite(product.id) ? 'currentColor' : 'none'} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-blue-600" size={32} />
                <p className="text-sm font-medium text-gray-800">Entrega Grátis</p>
                <p className="text-xs text-gray-600">Acima de R$ 150</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-blue-600" size={32} />
                <p className="text-sm font-medium text-gray-800">Garantia</p>
                <p className="text-xs text-gray-600">30 dias</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-2 text-blue-600" size={32} />
                <p className="text-sm font-medium text-gray-800">Troca Grátis</p>
                <p className="text-xs text-gray-600">7 dias</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Descrição</TabsTrigger>
            <TabsTrigger value="specifications">Especificações</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold text-gray-800">Características:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Material de alta qualidade e durabilidade</li>
                    <li>• Design realista com detalhes únicos</li>
                    <li>• Confortável para uso prolongado</li>
                    <li>• Fácil de vestir e ajustar</li>
                    <li>• Adequado para diversas ocasiões</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Informações Técnicas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Tamanhos:</strong> P, M, G, GG</li>
                      <li><strong>Material:</strong> Pelúcia premium</li>
                      <li><strong>Peso:</strong> 800g - 1.2kg</li>
                      <li><strong>Cor:</strong> Conforme imagem</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Cuidados</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Lavar à mão com água fria</li>
                      <li>• Não usar alvejante</li>
                      <li>• Secar à sombra</li>
                      <li>• Não passar a ferro</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-gray-800">{product.rating}</div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{product.reviews} avaliações</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 border-t pt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-800">Maria S.</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Fantasia incrível! A qualidade é excelente e o acabamento é perfeito. 
                        Muito confortável de usar.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-800">João P.</div>
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                          <Star size={16} className="text-gray-300" />
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Boa qualidade, mas demorou um pouco para chegar. No geral, recomendo!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;