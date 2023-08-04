const productsData = [];
const categories = ["Mobile", "Laptop", "PC", "Accessories", "Headphones", "Smartwatches"]
function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

for (let i = 1; i <= 60; i++) {
    let prod_category = getRandomCategory()
    productsData.push({
    id: i,
    name: `${prod_category} ${i}`,
    price: (Math.random() * 100).toFixed(2),
    image: `/product${i}.jpg`,
    description: `This is the product number ${i}.`,
    category: prod_category
});
};

export default productsData;