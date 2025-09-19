function createRecipe(name, time, cuisine, ingredients, steps) {
  const recipe = document.createElement("div");

  recipe.innerHTML = `
        <h1>${name}</h1>
        <p>Time: ${time}</p>
        <p>Cuisine: ${cuisine}</p>
    `;

  const ingredientList = document.createElement("ul");
  ingredientList.classList.add("ingredients");
  ingredients.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ingredientList.appendChild(li);
  });
  recipe.appendChild(ingredientList);

  const stepList = document.createElement("ol");
  stepList.classList.add("steps");
  steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepList.appendChild(li);
  });
  recipe.appendChild(stepList);

  return recipe;
}

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:3000/recipes");
  const recipes = await response.json();

  const recipeList = document.querySelector("#recipes");

  for (const recipe of recipes) {
    const recipeElement = createRecipe(
      recipe.name,
      recipe.time,
      recipe.cuisine,
      recipe.ingredients,
      recipe.steps
    );
    recipeList.appendChild(recipeElement);
  }

  const spaghetti = createRecipe(
    "Spaghetti Carbonara",
    "30",
    "Italian",
    ["Get all ingredients"],
    ["Do all the steps"]
  );
  recipeList.appendChild(spaghetti);

  const applePie = createRecipe(
    "Apple Pie",
    "30",
    "British",
    ["Get all ingredients"],
    ["Do all the steps"]
  );
  recipeList.appendChild(applePie);

  const pancakes = createRecipe(
    "Pancakes",
    "15",
    "American",
    ["Get all ingredients"],
    ["Do all the steps"]
  );
  recipeList.appendChild(pancakes);

  const stickyToffeePudding = createRecipe(
    "Sticky Toffee Pudding",
    "30",
    "British",
    ["Get all ingredients"],
    ["Do all the steps"]
  );
  recipeList.appendChild(stickyToffeePudding);

  const etonMess = createRecipe(
    "Eton Mess",
    "10",
    "British",
    ["Get all ingredients"],
    ["Do all the steps"]
  );
  recipeList.appendChild(etonMess);

  const newRecipeForm = document.querySelector("form");
  newRecipeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRecipe = {
      name: event.target.name.value,
      cuisine: event.target.cuisine.value,
      time: event.target.time.value,
      ingredients: event.target.ingredients.value.split(/\r?\n/),
      steps: event.target.steps.value.split(/\r?\n/),
    };

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    const recipeElement = createRecipe(
      newRecipe.name,
      newRecipe.time,
      newRecipe.cuisine,
      newRecipe.ingredients,
      newRecipe.steps
    );
    recipeList.appendChild(recipeElement);
  });
});
