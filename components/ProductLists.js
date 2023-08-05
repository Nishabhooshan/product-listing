import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@/components/AppContext';
import products from '@/data/generateData';
import ReactPaginate from 'react-paginate';

const ProductLists = () => {
  const { search, categoryFilter, priceRange, priceCategory } = useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 9;
  const pagesVisited = pageNumber * productsPerPage;

  const filteredProducts = products
    .filter((product) => !categoryFilter || product.category === categoryFilter)
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    .filter((product) => product.price <= priceRange.max);

  if (priceCategory === 'highest') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (priceCategory === 'lowest') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Reset page number when filters change
  useEffect(() => {
    setPageNumber(0);
  }, [search, categoryFilter, priceRange, priceCategory]);

  return (
    <>
      <div className="flex flex-wrap justify-center  gap-4 pt-8">
        {filteredProducts
          .slice(pagesVisited, pagesVisited + productsPerPage)
          .map((product) => (
            <div
              key={product.id}
              className="w-72 md:w-80 lg:w-96 xl:w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform hover:scale-105"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={product.image}
                  alt="product"
                />
              </a>
              <div className="px-5 py-4">
                <a href="#" className="block hover:underline">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <div className="mt-2.5 mb-5">
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination flex space-x-2'}
          previousLinkClassName={
            'pagination__link px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600'
          }
          nextLinkClassName={
            'pagination__link px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600'
          }
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active bg-blue-500 text-white'}
          breakClassName={'pagination__break'}
          pageLinkClassName={'pagination__page-link'}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousClassName={'pagination__previous'}
          nextClassName={'pagination__next'}
          breakLinkClassName={'pagination__page-link'}
        />
      </div>
    </>
  );
};

export default ProductLists;
