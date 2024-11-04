import React, { useState } from 'react'
import RecipeItem from './components/recipe-item/RecipeItem'
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/create-recipe/CreateRecipe';
import { User } from './components/user/User';
import { Header } from './components/header/Header';




function App() {

  const [ searchTerm, setSearchTerm ] = useState<string>('')

  const [queryTerm, setQueryTerm] = useState('')
  
  const {isLoading, data} = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  }

  return (
    <>

    <section>

    <div className='flex justify-between'>

      <User />
      <CreateRecipe />
      <Header />

    </div>

    <div className='p-4 flex flex-row items-center mx-2'>
       <p className='text-2xl'>Find Your Favorite dish:</p>
       <input type='search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Type Search Recipe' className='input ml-4'/>
       <button onClick={handleSearch} className='border-2 rounded-xl bg-green-300 border-green-400 text-lg ml-2 w-[100px] h-[46px]'>Search</button>
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
