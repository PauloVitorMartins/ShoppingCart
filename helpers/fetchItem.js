const fetchItem = async (itemId) => {
  const apiUrl = `https://api.mercadolibre.com/items/${itemId}`;
  const result = await fetch(apiUrl);
  const resultJson = await result.json();
  return resultJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
