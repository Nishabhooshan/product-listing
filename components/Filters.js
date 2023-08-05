import React, { useContext } from 'react';
import { AppContext } from '@/components/AppContext';

const Filters = () => {
  const {
    setSearch,
    setCategoryFilter,
    priceRange,
    setPriceRange,
    priceCategory,
    setPriceCategory,
  } = useContext(AppContext);

  const categories = [
    "All",
    "mobile",
    "laptop",
    "PC",
    "Accessories",
    "Headphones",
    "watch",
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

  const handlePriceChange = (event) => {
    setPriceRange({ ...priceRange, max: parseInt(event.target.value, 10) });
  };

  const handlePriceCategoryChange = (event) => {
    const selectedPriceCategory = event.target.value;
    setPriceCategory(selectedPriceCategory);
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
    <div className="bg-gray-200 p-4 pt-8 w-1/6">
      <div>
        <label htmlFor="category" className="block font-medium pt-4">
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
        <label htmlFor="priceRange" className="block font-medium pb-4 pt-4">
          Price Range
        </label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="1000"
          value={priceRange.max}
          onChange={handlePriceChange}
        />
        <span>${priceRange.max}</span>
      </div>
      <div>
        <label htmlFor="priceCategory" className="block font-medium pt-4">
          Price Category
        </label>
        <select
          id="priceCategory"
          name="priceCategory"
          className="block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          value={priceCategory}
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