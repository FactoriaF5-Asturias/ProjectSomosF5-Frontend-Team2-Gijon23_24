
let favorites = [];

export const addFavorite = (product) => {
 favorites.push(product);
};

export const removeFavorite = (productId) => {
 const index = favorites.findIndex(product => product.id === productId);
 if (index !== -1) {
    favorites.splice(index, 1);
 }
};

export const isFavorite = (productId) => {
 return favorites.some(product => product.id === productId);
};

export const getFavorites = () => {
 return favorites;
};