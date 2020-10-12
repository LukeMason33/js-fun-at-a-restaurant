function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`
};

function createMenuItem(menuItemName, price, type) {
  menuItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return menuItem;
};

function addIngredients(ingredient1, ingredients) {
  if (ingredient1 != ingredients[ingredients.length -1]) {
    ingredients.push(ingredient1);
  }
  else {
    return ingredients;
  };
};

function formatPrice(price) {
  menuItem.price = `$${menuItem.price}`;
  return menuItem.price;

};

function decreasePrice(price) {
  menuItem.price = menuItem.price * .9;
  return menuItem.price;
};

function createRecipe(title, ingredients, menuItemType) {
  recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
