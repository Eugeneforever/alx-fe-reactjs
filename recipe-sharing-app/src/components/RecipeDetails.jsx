import useRecipeStore from './recipeStore';
import {useParams} from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ()=>{
    const {recipeID} = useParams();
    const recipe = useRecipeStore((state)=>
        state.recipes.find((recipe)=>recipe.id===parseInt(recipeID))
    );
    if(!recipe){
        return <p>No Recipe added</p>
    }
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipeID} />
            <DeleteRecipeButton recipe={recipe.id} />
        </div>
    );
};
export default RecipeDetails;