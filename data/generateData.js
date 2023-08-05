const productsData = [];
const categories = ["mobile", "laptop", "PC", "Accessories", "Headphones", "watch"]
function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const minNumber = 1;
  const maxNumber = 5;
 


for (let i = 1; i <= 60; i++) {
    let prod_category = getRandomCategory()
    const randomInteger = getRandomInteger(minNumber, maxNumber);
    productsData.push({
    id: i,
    name: `${prod_category} ${i}`,
    price: (Math.random() * 100).toFixed(2),
    image: `./assets/${prod_category}/${prod_category}${randomInteger}.jpg`,
    description: `This is the product number ${i}.`,
    category: prod_category
});
};

export default productsData;