import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultValue = {
    name: "",
    image: "",
}

export default function CreateRecipe() {

    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = e => {
        e.preventDefault();
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }

    return (
        <div className="mt-10">
            <h1>Create New Recipe:</h1>
         <form className="gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Recipe Name" value={recipe.name} onChange={e => setRecipe({...recipe, name: e.target.value})} className="input "/>
            <input type="text" placeholder="Recipe Image URL" value={recipe.image} onChange={e => setRecipe({...recipe, image: e.target.value})} className="input"/>
            <button type="submit" className="border-2 rounded-2xl p-2 bg-green-300 border-green-400 mb-6 ml-2">Create Recipe</button>
         </form>

        </div>
    )
}