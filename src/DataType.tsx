interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }
  
  interface IRecipeProps {
    recipeData: IRecipe;
  }
  
  interface IRecipeListProps {
    recipes: IRecipe[];
    tagName: string;
    handleBack: () => void;
  }
  
  interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
  }
  
  interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
  }
  
  export type {
    IRecipe,
    IRecipeProps,
    IRecipeListProps,
    IRecipeTagProps,
    IRecipeTagListProps,
  };
  