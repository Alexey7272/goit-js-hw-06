const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngradients = ingredients => {
  return ingredients.map(ingradient => {
    const ingradientsList = document.createElement(`li`);
    ingradientsList.classList.add(`item`);
    ingradientsList.textContent = ingradient;
    return ingradientsList;
  });
};

const elemIngradients = allIngradients(ingredients);
const addIngradientsList = document.querySelector(`ul`);

addIngradientsList.append(...elemIngradients);