
// import React, { useEffect, useState } from 'react';
// import RecipeTagList from './RecipeTagList';
// import RecipeList from './RecipeList';
// import axios from 'axios';


// const App: React.FC = () => {
//   const [tags, setTags] = useState<string[]>([]);
//   const [selectedTag, setSelectedTag] = useState<string | null>(null);
//   const [recipes, setRecipes] = useState<IRecipe[]>([]);

//   // Fetching the tags on start
//   useEffect(() => {
//     axios.get('https://dummyjson.com/recipes/tags')
//       .then((response) => setTags(response.data))
//       .catch((error) => console.error('Error fetching tags:', error));
//   }, []);

//   // Fetching the recipes for the selected tag
//   useEffect(() => {
//     if (selectedTag) {
//       axios.get(`https://dummyjson.com/recipes/tag/${selectedTag}`)
//         .then((response) => setRecipes(response.data.recipes))
//         .catch((error) => console.error('Error fetching recipes:', error));
//     }
//   }, [selectedTag]);

//   // Handler to reset tag
//   const handleBackToTags = () => {
//     setSelectedTag(null);
//   };

//   return (
//     <div>
//       <h1>ACME Recipe O'Master</h1>
//       {selectedTag ? (
//         <>
//           <button onClick={handleBackToTags}>Back</button>
//           <RecipeList recipes={recipes} />
//         </>
//       ) : (
//         <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
//       )}
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { IRecipe } from "./DataType";

const App = () => {
  const [recipeTagList, setRecipeTagList] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState("tags");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => {
        console.log("taglist", data);
        setRecipeTagList(data);
      });
  }, []);

  function handleSelectTag(tagName: string) {
    setSelectedTag(tagName);
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("recipe data", data);
        setRecipeList(data.recipes);
        setCurrentPage("recipes");
      });
  }

  function handleBack() {
    setCurrentPage("tags");
  }

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {currentPage === "tags" ? (
        <RecipeTagList tagList={recipeTagList} onSelectTag={handleSelectTag} />
      ) : (
        <RecipeList
          recipes={recipeList}
          tagName={selectedTag}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};

export default App;
