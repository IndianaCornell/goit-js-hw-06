const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.getElementById('ingredients')

ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient; 
  item.classList.add("item")
  ingredientsList.append(item);
})