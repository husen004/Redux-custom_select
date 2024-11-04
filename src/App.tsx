import React from 'react'
import RecipeItem from './components/recipe-item/RecipeItem'
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/create-recipe/CreateRecipe';
import { User } from './components/user/User';
import { Header } from './components/header/Header';




function App() {

  const {isLoading, data} = useGetRecipesQuery(null);

  return (
    <>

    <section>

    <div className='flex justify-between'>

      <User />
      <CreateRecipe />
      <Header />

    </div>

    <div className='flex flex-wrap justify-center items-center gap-6 p-2'>
        
      {isLoading ? <div>Loading . . . </div> : data ? data.map(recipe =>
      <RecipeItem
      key={recipe.id}
      recipe={recipe}
      />
      ) : <div>Did Not Found</div>}

    </div>

    </section>

    </>
  )
}

export default App
