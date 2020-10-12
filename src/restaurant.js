function createRestaurant(name) {
  restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
};

function addMenuItem(restaurant, food) {
  if (food === restaurant.menus.breakfast[0] || food.name === restaurant.menus.lunch[0] || food.name === restaurant.menus.dinner[0]) {
    return restaurant;
  }
  else if (food.type === "lunch") {
    restaurant.menus.lunch.push(food);
  return restaurant;
  }
  else if (food.type === "breakfast") {
    restaurant.menus.breakfast.push(food);
    return restaurant;
  }
  else if(food.type === "dinner") {
    restaurant.menus.dinner.push(food);
    return restaurant;
  }
  else {

    return restaurant;
  };
};

function removeMenuItem(restaurant, food, type) {
  if (restaurant.name !== "Sexy Pizza") {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`;
  }
  if (food === restaurant.menus.breakfast[0].name && type === restaurant.menus.breakfast[0].type) {
    restaurant = restaurant.menus.breakfast.splice(0, 1);
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  }
  else if (food === restaurant.menus.lunch[0].name && type === restaurant.menus.lunch[0].type) {
    restaurant = restaurant.menus.lunch.splice(0, 1);
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  }
  else if (food === restaurant.menus.dinner[0].name && type === restaurant.menus.dinner[0].type) {
    restaurant = restaurant.menus.dinner.splice(0, 1);
    return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
  }
  else {
    return restaurant;
  };
};
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
