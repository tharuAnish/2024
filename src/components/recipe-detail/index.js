import BackBtn from "../back-btn"
import { CardTitle } from "../ui/card"

export default function RecipeDetailsPage({ recipeDetail }) {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-gray-800  min-h-screen">
      <div className="flex justify-between">
        <CardTitle className="mb-9">Recipes</CardTitle> <BackBtn />
      </div>
      <div className="flex mb-8 p-4 bg-stone-50 rounded-lg shadow-md">
        <img
          src={recipeDetail.image}
          alt={recipeDetail.name}
          className="w-60 basis-2/5 object-cover rounded-md shadow-lg"
        />
        <div className="ml-6 basis-3/5 ">
          <h1 className="text-4xl mt-5 font-bold ">{recipeDetail.name}</h1>

          <div className="flex gap-3 mt-2 text-sm">
            <p>
              <strong className="font-medium ">Rating:</strong>{" "}
              {recipeDetail.rating} (based on {recipeDetail.reviewCount}{" "}
              reviews)
            </p>
            <p>
              <strong className="font-medium">Meal Type:</strong>{" "}
              {recipeDetail.mealType.join(", ")}
            </p>
          </div>

          <div className="mt-3 mb-1">
            {recipeDetail.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-50 border text-gray-700 rounded-full px-5 py-1 text-sm  mr-2 mb-2 transition-colors hover:bg-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="gap-2  flex flex-wrap">
            <p>
              <strong className="font-medium">Prep Time:</strong>{" "}
              {recipeDetail.prepTimeMinutes} minutes,
            </p>
            <p>
              <strong className="font-medium">Cook Time:</strong>{" "}
              {recipeDetail.cookTimeMinutes} minutes,
            </p>
            <p>
              <strong className="font-medium">Servings:</strong>{" "}
              {recipeDetail.servings},
            </p>
            <p>
              <strong className="font-medium">Difficulty:</strong>{" "}
              {recipeDetail.difficulty},
            </p>
            <p>
              <strong className="font-medium">Cuisine:</strong>{" "}
              {recipeDetail.cuisine},
            </p>
            <p>
              <strong className="font-medium">Calories per Serving:</strong>{" "}
              {recipeDetail.caloriesPerServing},
            </p>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold mb-2 mt-4 w-1/3 border-b pb-2">
              Ingredients
            </h2>
            <ul className="list-disc grid gap-x-5 grid-cols-2 pl-6 ">
              {recipeDetail.ingredients.map((ingredient, index) => (
                <li key={index} className="">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8  pt-4">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipeDetail.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
