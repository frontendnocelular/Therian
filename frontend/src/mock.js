export const mockProducts = [
  {
    id: 1,
    name: "Fantasia de Leão Realista Premium",
    price: 189.90,
    originalPrice: 249.90,
    category: "felinos",
    image: "https://images.unsplash.com/photo-1691366064797-19a66eaff844?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxtYXNjb3R8ZW58MHx8fHwxNzU0MzUyODY4fDA&ixlib=rb-4.1.0&q=85",
    images: [
      "https://images.unsplash.com/photo-1691366064797-19a66eaff844?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxtYXNjb3R8ZW58MHx8fHwxNzU0MzUyODY4fDA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg",
      "https://images.unsplash.com/photo-1602676617241-353e6738bf41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjb3NwbGF5fGVufDB8fHx8MTc1NDM1MjgzOXww&ixlib=rb-4.1.0&q=85",
      "https://png.pngtree.com/png-clipart/20231016/original/pngtree-collection-children-wearing-cute-animal-costumes-png-image_13315511.png"
    ],
    rating: 4.8,
    reviews: 324,
    description: "Fantasia profissional de leão com juba detalhada e cauda realista. Material de pelúcia premium, super confortável e durável. Ideal para festas temáticas, carnaval, eventos infantis e cosplay. Inclui capuz com juba, macacão completo e cauda. Disponível em vários tamanhos para crianças e adultos.",
    inStock: true,
    discount: 24,
    tags: ["popular", "promoção", "premium"],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Dourado", "Marrom"],
    material: "Pelúcia Premium",
    care: "Lavagem à mão com água fria",
    specifications: {
      weight: "1.2kg",
      fabric: "100% Poliéster - Pelúcia macia",
      includes: "Capuz com juba, Macacão, Cauda, Manual de cuidados",
      ageGroup: "3+ anos"
    }
  },
  {
    id: 2,
    name: "Fantasia de Urso Polar Gigante",
    price: 179.90,
    originalPrice: 229.90,
    category: "ursos",
    image: "https://images.unsplash.com/photo-1540981412106-6de4e3c1fc92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxtYXNjb3R8ZW58MHx8fHwxNzU0MzUyODY4fDA&ixlib=rb-4.1.0&q=85",
    images: [
      "https://images.unsplash.com/photo-1540981412106-6de4e3c1fc92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxtYXNjb3R8ZW58MHx8fHwxNzU0MzUyODY4fDA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1575205346335-04dd07f0cc25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxjb3NwbGF5fGVufDB8fHx8MTc1NDM1MjgzOXww&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1577895096739-8c2042bfa9e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBjb3N0dW1lfGVufDB8fHx8MTc1NDM1Mjg0NXww&ixlib=rb-4.1.0&q=85",
      "https://png.pngtree.com/png-clipart/20231016/original/pngtree-collection-children-wearing-cute-animal-costumes-png-image_13315511.png"
    ],
    rating: 4.7,
    reviews: 198,
    description: "Fantasia super quentinha de urso polar com pelagem branca e macia. Perfeita para o inverno e festivais temáticos. Design fofo e confortável com capuz aconchegante e detalhes realistas. Ideal para toda família - disponível desde tamanhos infantis até adultos. Material térmico que mantém o calor.",
    inStock: true,
    discount: 22,
    tags: ["conforto", "inverno", "família"],
    sizes: ["PP", "P", "M", "G", "GG", "EGG"],
    colors: ["Branco Neve", "Off-White"],
    material: "Pelúcia Térmica",
    care: "Lavagem à máquina - água fria - ciclo delicado",
    specifications: {
      weight: "1.5kg",
      fabric: "Pelúcia térmica de alta qualidade",
      includes: "Capuz com orelhas, Macacão completo, Luvas, Manual de cuidados",
      ageGroup: "Todas as idades",
      temperature: "Ideal para temperaturas de 5°C a 15°C"
    }
  }
];

export const categories = [
  { id: "todos", name: "Todos os Animais", count: 2 },
  { id: "felinos", name: "Felinos", count: 1 },
  { id: "ursos", name: "Ursos", count: 1 }
];

export const banners = [
  {
    id: 1,
    title: "Fantasias Premium de Animais",
    subtitle: "Apenas 2 modelos exclusivos - Leão e Urso Polar",
    image: "https://images.unsplash.com/photo-1691366064797-19a66eaff844?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxtYXNjb3R8ZW58MHx8fHwxNzU0MzUyODY4fDA&ixlib=rb-4.1.0&q=85",
    buttonText: "Ver Coleção Exclusiva"
  },
  {
    id: 2,
    title: "Qualidade Premium",
    subtitle: "Materiais de alta qualidade e conforto excepcional",
    image: "https://images.unsplash.com/photo-1540981412106-6de4e3c1fc92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxtYXNjb3R8ZW58MHx8fHwxNzU0MzUyODY4fDA&ixlib=rb-4.1.0&q=85",
    buttonText: "Explorar"
  }
];