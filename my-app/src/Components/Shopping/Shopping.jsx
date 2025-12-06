import React, { useMemo, useState } from 'react';
import Categories from '../Categories/Categories';
import ProductCard from '../ProductCard/ProductCard';
import './Shopping.css';

  const PRODUCTS = {
    pcParts: [
      { id: 1, name: "Left Handed Mouse", description: "Mouse for Left Handed Users", price: 199.99, image: "https://resource.logitech.com/e_trim/w_700,h_600,c_pad,q_auto,f_auto,dpr_1.0/b_white/content/dam/gaming/en/products/pro-2-lightspeed/gallery/pro2-lightspeed-black-new-gallery1.png" },
      { id: 2, name: "Left Handed Keyboard", description: "Keyboard for Left Handed Users", price: 249.99, image: "https://www.i-rocks.com/uploads/news/en/K65MAWnews01E.jpg" }
    ],
    shoes: [
      { id: 3, name: "Adasdas", description: "Left pair of shoe", price: 199.99, image: "data:image/jpeg;base64,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" },
      { id: 4, name: "Niek", description: "Left pair of sandal", price: 249.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle8u6LuVzpxNPCbyugXUO0tt4OGwNK2WQWw&s" }
    ],
    burger: [
      { id: 5, name: "Beesechurger", description: "Burger in Cheese", price: 199.99, image: "https://i.redd.it/4mdi4h36yhq41.jpg" },
      { id: 6, name: "Burger Pro Max", description: "2TB, 58mp", price: 249.99, image: "https://www.inspiredcases.com/cdn/shop/products/1851_35.jpg?v=1667255171" }
    ]
  };

function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'pcParts', name: 'PC Parts' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'burger', name: 'Burger' }
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBuyProduct = (product) => {
    alert(`Purchasing ${product.name} for ₱${product.price}`);
  };

  const visibleProducts = useMemo(() => {
    const data = selectedCategory === 'all'
      ? Object.values(PRODUCTS).flat()
      : PRODUCTS[selectedCategory] || [];
    const filtered = data.filter((p) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    });
    const sorted = [...filtered];
    if (sortBy === 'priceAsc') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'priceDesc') sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [selectedCategory, query, sortBy]);

  return (
    <div className="page shopping-page">
      <div className="shopping-layout">
        <aside className="sidebar-card card">
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </aside>
        <section className="content">
          <div className="header">
            <h1 className="title">LAZSHOPEE</h1>
          </div>
          <div className="toolbar card">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="input"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
            <span className="count">{visibleProducts.length} items</span>
          </div>
          <div className="products-grid">
            {visibleProducts.map((item) => (
              <ProductCard key={item.id} product={item} onBuy={handleBuyProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shopping;

