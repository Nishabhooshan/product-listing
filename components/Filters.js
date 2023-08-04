
import React, { useContext } from 'react';
import { AppContext } from '@/components/AppContext';

const Filters = () => {
  const {
    setSearch,
    setCategoryFilter,
    priceRange,
    setPriceRange,
  } = useContext(AppContext);

  const categories = [
    "All",
    "Mobile",
    "Laptop",
    "PC",
    "Accessories",
    "Headphones",
    "Smartwatches",
  ];

  const priceCategories = [
    { label: "Highest Price", value: "highest" },
    { label: "Lowest Price", value: "lowest" },
  ];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory === 'All' ? '' : selectedCategory);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange({ ...priceRange, max: value });
  };

  const handlePriceCategoryChange = (event) => {
    const selectedPriceCategory = event.target.value;
    switch (selectedPriceCategory) {
      case 'highest':
        setPriceRange({ ...priceRange, max: 1000 });
        break;
      case 'lowest':
        setPriceRange({ ...priceRange, max: 100 });
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="category" className="block font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="search" className="block font-medium">
          Search
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <label htmlFor="priceRange" className="block font-medium">
          Price Range
        </label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="1000"
          value={priceRange.max}
          onChange={(e) => handlePriceChange(e.target.value)}
        />
        <span>${priceRange.max}</span>
      </div>
      <div>
        <label htmlFor="priceCategory" className="block font-medium">
          Price Category
        </label>
        <select
          id="priceCategory"
          name="priceCategory"
          className="block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          onChange={handlePriceCategoryChange}
        >
          <option value="">Select Price Category</option>
          {priceCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
