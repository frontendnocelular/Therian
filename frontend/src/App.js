import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="App min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <BrowserRouter>
            <Header />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/produto/:id" element={<ProductDetail />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/favoritos" element={<Favorites />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </BrowserRouter>
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;