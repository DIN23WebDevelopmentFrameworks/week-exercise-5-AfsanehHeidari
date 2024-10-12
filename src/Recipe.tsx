// import React from 'react';

// interface IRecipeProps {
//   recipeData: IRecipe;
// }

// function Recipe ({ recipeData }:IRecipeProps)  {
//   return (
//     <div className="recipe-card">
//       <h2>{recipeData.name}</h2>
//       <p><strong>Difficulty:</strong> {recipeData.difficulty}</p>
//       <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
//       <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
//       <p><strong>Servings:</strong> {recipeData.servings}</p>
//       <p><strong>Ingredients:</strong></p>
//       <ul>
//         {recipeData.ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>
//       <p><strong>Instructions:</strong></p>
//       <ol>
//         {recipeData.instructions.map((instruction, index) => (
//           <li key={index}>{instruction}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Recipe;


import { IRecipeProps } from "./DataType";

export default function Recipe({ recipeData }: IRecipeProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "5px", margin: "10px" }}>
      <h3>{recipeData.name}</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <ul>
        {recipeData.instructions.map((instruction, index) => (
          <div key={index}>
            {index + 1}. {instruction}
          </div>
        ))}
      </ul>
    </div>
  );
}

