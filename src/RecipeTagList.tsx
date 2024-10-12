import React from 'react';
import RecipeTag from './RecipeTag';


interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
  }

function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {
    return (
        <div>
            {tagList.map((tag)=>(
                <RecipeTag key={tag} tagName={tag} onSelectTag={()=> onSelectTag(tag)}/>
                ))}
        </div>
    );
}

export default RecipeTagList;

