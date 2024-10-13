import React from 'react'
import RecipeItem from './components/recipe-item/RecipeItem'
import { Header } from './components/header/header';

const App = () => {
  return (
    <section>
    <Header />
    <div className='flex flex-row justify-center items-center flex-wrap gap-10'>
      <RecipeItem recipe={{
        id: 1,
        name: 'lasangya',
      }} />

      <RecipeItem recipe={{
        id: 2,
        name: 'Pizza',
      }} />

      <RecipeItem recipe={{
        id: 3,
        name: 'Pasta',
      }} />
    </div>

    </section>
  )
}

export default App