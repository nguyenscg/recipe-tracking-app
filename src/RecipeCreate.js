import React, { useState } from "react";

function RecipeCreate({recipes, createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    // clears form contents each time submitted
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);
  
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name" 
                placeholder="Name" 
                onChange={handleNameChange} 
                value={name}
                />
            </td>
            <td>
              <input 
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
                value={cuisine}
                />
            </td>
            <td>
              <input 
                name="photo"
                placeholder="URL"
                onChange={handlePhotoChange}
                value={photo}
                />
            </td>
            <td>
              <textarea 
                name="ingredients" 
                placeholder="Ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
                />
            </td>
            <td>
              <textarea 
                name="preparation" 
                placeholder="Preparation"
                onChange={handlePreparationChange}
                value={preparation}
                />
            </td>
            <td>
              <button type="submit" onSubmit={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;