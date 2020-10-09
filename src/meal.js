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
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
