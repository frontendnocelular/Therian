import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Truck, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ProductCard from '../components/ProductCard';
import { mockProducts, banners } from '../mock';

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 4);
  const popularProducts = mockProducts.filter(p => p.tags.includes('popular'));

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-200/30 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Desperte seu
              <span className="block text-blue-200 animate-pulse">Animal Interior</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed animate-slide-up">
              Fantasias de animais premium para transformar qualquer momento em uma experiência única e divertida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/catalogo">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg shadow-xl">
                  Explorar Catálogo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/catalogo?categoria=felinos">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 px-8 py-4 text-lg">
                  Ver Felinos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Qualidade Premium</h3>
                <p className="text-gray-600">Materiais de alta qualidade e durabilidade excepcional</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Entrega Rápida</h3>
                <p className="text-gray-600">Receba suas fantasias em casa com segurança e agilidade</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Experiência Única</h3>
                <p className="text-gray-600">Transforme-se no seu animal favorito com realismo incrível</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Produtos em Destaque</h2>
            <p className="text-xl text-gray-600">Nossas fantasias mais amadas pelos clientes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/catalogo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
                Ver Todos os Produtos
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mais Populares</h2>
            <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <p className="text-xl text-gray-600">As fantasias favoritas dos nossos clientes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para a Transformação?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Encontre a fantasia perfeita e desperte seu lado selvagem
          </p>
          <Link to="/catalogo">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
              Começar Agora
              <Sparkles className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;