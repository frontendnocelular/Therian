import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-gray-400">
            <ShoppingBag size={120} className="mx-auto mb-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-600">Seu carrinho está vazio</h2>
          <p className="text-gray-500 text-lg">
            Que tal explorar nosso catálogo e encontrar algumas fantasias incríveis?
          </p>
          <Link to="/catalogo">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Explorar Produtos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(productId);
      toast({
        title: "Produto removido",
        description: "O produto foi removido do seu carrinho.",
      });
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId, productName) => {
    removeItem(productId);
    toast({
      title: "Produto removido",
      description: `${productName} foi removido do seu carrinho.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Carrinho limpo",
      description: "Todos os produtos foram removidos do seu carrinho.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/catalogo" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200">
            <ArrowLeft className="mr-2" size={20} />
            Continuar Comprando
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Meu Carrinho</h1>
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${Math.random()}`} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={`/produto/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link to={`/produto/${item.id}`} className="block">
                        <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-2 truncate">
                          {item.name}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-bold text-blue-600">
                          R$ {item.price.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-500">
                          Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="font-medium min-w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 size={16} className="mr-1" />
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex justify-end pt-4">
              <Button
                variant="outline"
                onClick={handleClearCart}
                className="text-red-500 border-red-300 hover:bg-red-50 hover:border-red-400"
              >
                <Trash2 size={16} className="mr-2" />
                Limpar Carrinho
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Frete</span>
                    <span className="text-green-600 font-medium">
                      {getTotalPrice() >= 150 ? 'Grátis' : 'R$ 15,90'}
                    </span>
                  </div>
                  
                  {getTotalPrice() < 150 && (
                    <div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
                      Faltam apenas R$ {(150 - getTotalPrice()).toFixed(2)} para frete grátis!
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-blue-600">
                    R$ {(getTotalPrice() + (getTotalPrice() >= 150 ? 0 : 15.90)).toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                    Finalizar Compra
                  </Button>
                  <Button variant="outline" className="w-full">
                    Calcular Frete
                  </Button>
                </div>
                
                <div className="text-xs text-gray-500 text-center pt-4">
                  Pagamento seguro com criptografia SSL
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;