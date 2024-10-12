// import React from 'react';


// interface IRecipeTagProps {
//     tagName: string;
//     onSelectTag: (tagName: string) => void;
// }

// function RecipeTag({tagName,onSelectTag}: IRecipeTagProps){


//     return (
//         <div>
//             <button onClick={()=>onSelectTag(tagName)}>
//                 {tagName}
//             </button>
//         </div>
//     );
// }

// export default RecipeTag;


import { IRecipeTagProps } from "./DataType";

export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
  return (
    <div
      onClick={() => onSelectTag(tagName)}
      role="button"
      tabIndex={0} // Add tabIndex to make the div focusable
      style={{ cursor: "pointer", border: "1px solid #ccc", padding: "5px" }}
    >
      {tagName}
    </div>
  );
}
