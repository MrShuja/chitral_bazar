import React from "react";
import { contents } from "../data/contents";
import { chitralProducts } from "../data/chitral_products";
import ProductCard from "../components/ProductCart";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${contents.heroSection.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay */}
        <div className="container mx-auto relative z-10 text-center md:text-left px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {contents.heroSection.title}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6 max-w-xl">
            {contents.heroSection.subtitle}
          </p>
          <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-600 text-lg">
            {contents.heroSection.buttonText}
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Featured Chitral Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {chitralProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
