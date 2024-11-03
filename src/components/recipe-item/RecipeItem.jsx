import { useDispatch, useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';


function RecipeItem({recipe}) {
  const { favorites } = useSelector(state => state)

  const {toggleFavorites} = useAction()

  console.log(favorites);

  const isExist = favorites.some(r => r.id === recipe.id)
  
  return (  
    <div className=''>
    <div className='bg-white my-6 text-center rounded-2xl p-6'>
      <img src={recipe.image} alt={recipe.name} className='w-[300px] h-[250px] object-cover' />
      <h1 className='my-4'>{recipe.name}</h1>
      <button onClick={() => toggleFavorites(recipe)} className={`w-[170px] rounded-xl border-2 p-2 transition-all ease-in-out duration-400 hover:scale-105 cursor-pointer ${isExist ? "border-red-400 bg-red-300" : "border-green-400 bg-green-300"} `} type='button'>{isExist ? "Remove from" : "Add to"} favorites</button>
    </div>
    </div>
  )
}

export default RecipeItem;
