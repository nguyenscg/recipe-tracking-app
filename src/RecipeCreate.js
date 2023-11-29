import React, { useState } from "react";

function RecipeCreate({recipes, createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input name="name" placeholder="Name"/></td>
            <td><input name="cuisine" placeholder="Cuisine"/></td>
            <td><input name="photo" placeholder="URL"/></td>
            <td><textarea name="ingredients" placeholder="Ingredients"/></td>
            <td><textarea name="preparation" placeholder="Preparation"/></td>
            <td>
              <button type="submit" onClick={createRecipe}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;