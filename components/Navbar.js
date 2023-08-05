import React, { useContext, useState } from "react";
import { AppContext } from "@/components/AppContext";

const Navbar = () => {
  const {
    search,
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
    setCategoryFilter(selectedCategory === "All" ? "" : selectedCategory);
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
      case "highest":
        setPriceRange({ ...priceRange, max: 1000 });
        break;
      case "lowest":
        setPriceRange({ ...priceRange, max: 100 });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-900 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src="./assets/logo.jpg"
            className="h-14 mr-3"
            alt="Oliver Logo"
          />

          <div className="flex md:order-2">
            <div className={`relative md:block`}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div>
            <select
              id="category"
              name="category"
              className="block w-full p-2  border-gray-300 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white"
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
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="0"
              max="1000"
              value={priceRange.max}
              onChange={handlePriceChange}
            />
            <span className="dark:text-white">${priceRange.max}</span>
          </div>

          <div>
            <select
              id="priceCategory"
              name="priceCategory"
              className="block w-full p-2  border-gray-300 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white"
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
      </nav>
    </>
  );
};

export default Navbar;
