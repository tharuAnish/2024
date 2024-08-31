import RecipeDetailsPage from "@/components/recipe-detail"

async function getRecipeDetail(recipeId) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
    const result = await response.json()

    return result
  } catch (e) {
    throw new Error(e)
  }
}

export default async function RecipeDetail({ params }) {
  const recipeDetail = await getRecipeDetail(params.detail)
  return <RecipeDetailsPage recipeDetail={recipeDetail} />
}
