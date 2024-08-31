import RecipeList from "@/components/reecipe-list"

async function fetchListOfRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes")
    const result = await response.json()

    return result.recipes
  } catch (e) {
    throw new Error(e)
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes()

  return <RecipeList recipeList={recipeList} />
}
