import React from 'react'
import RecipeItem from './components/recipe-item/RecipeItem'
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { useGetRecipesQuery } from './store/api/api';




function App() {

  const {isLoading, data} = useGetRecipesQuery();
  
  console.log(data)

  return (
    <>

    <section>

    <Header />
    <User />
    <div>
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
