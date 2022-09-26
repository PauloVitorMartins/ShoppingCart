const fetchProducts = async (product) => {
    const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const result = await fetch(apiUrl);
    const resultJson = await result.json();
    return resultJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}