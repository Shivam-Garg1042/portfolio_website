import  { useState } from 'react';
import {  Factory, Cable } from 'lucide-react';
import pump1 from "../assets/pump1.jpg";
import pump2 from "../assets/pump2.jpg";
import pump3 from "../assets/pump3.jpg";
import pump5 from "../assets/pump5.jpg";
import pump6 from "../assets/pump6.jpg";
import pump7 from "../assets/pump7.jpg";
import system1 from "../assets/system1.jpg";
import system2 from "../assets/system2.jpg";
import system3 from "../assets/system3.jpg";
import system4 from "../assets/system4.png";
import system5 from "../assets/system5.jpg";
import system6 from "../assets/system6.jpg";
import cable1 from "../assets/cable1.webp";
import cable2 from "../assets/cable2.jpg";
import cable3 from "../assets/cable3.jpg";
import cable4 from "../assets/cable4.jpeg";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Pumps');

  const categories = [
    {
      title: "Pumps",
      icon: <Factory className="w-6 h-6" />,
      products: [
        { 
          name: "Self Priming Centrifugal Pumps", 
          description: "High efficiency pumps for various applications",
          image: pump1
        },
        { 
          name: "Monoblock Pumps", 
          description: "Compact design for reliable performance",
          image: pump2
        },
        { 
          name: "Submersible Pumps (1Ph & 3Ph)", 
          description: "Deep well pumping solutions",
          image: pump3
        },
        { 
          name: "Sewage Submersible Pumpsets", 
          description: "Heavy-duty waste water handling",
          image: pump5
        },
        { 
          name: "Openwell Monoblock Pumpset", 
          description: "Ideal for open well applications",
          image: pump6
        },
        { 
          name: "Dewatering Pumps", 
          description: "Efficient water removal solutions",
          image: pump7
        },
      ]
    },
    {
      title: "Specialized Systems",
      icon: <Factory className="w-6 h-6" />,
      products: [
        { 
          name: "Pressure Boosting Pumpsets", 
          description: "Maintain consistent water pressure",
          image: system1
        },
        { 
          name: "Hydroneumatic System", 
          description: "Advanced pressure management",
          image: system2
        },
        { 
          name: "RO Pumps", 
          description: "Reverse osmosis applications",
          image: system3
        },
        { 
          name: "Solar Pumps", 
          description: "Sustainable pumping solutions",
          image: system4
        },
        { 
          name: "Industrial Three Phase Pumps", 
          description: "Heavy-duty industrial applications",
          image: system5
        },
        { 
          name: "Induction Electric Motors", 
          description: "Powerful motor solutions",
          image: system6
        },
      ]
    },
    {
      title: "Components & Accessories",
      icon: <Cable className="w-6 h-6" />,
      products: [
        { 
          name: "Flat Submersible Cable", 
          description: "Aquatex Texmo quality cables",
          image: cable1
        },
        { 
          name: "HDPE Pipes", 
          description: "Durable water transport solutions",
          image: cable2
        },
        { 
          name: "UPVC Column Pipe", 
          description: "Reliable piping systems",
          image: cable3
        },
        
        { 
          name: "Spare Parts", 
          description: "Genuine Texmo components",
          image: cable4
        },
      ]
    }
  ];

  return (
    <section id="products"className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-6 py-1 rounded-full flex items-center gap-2 ${
                activeCategory === cat.title 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } transition-colors`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            activeCategory === category.title && (
              category.products.map((product, index) => (
                <div
                  key={`${category.title}-${index}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;