export default function RecipeDetailsPage({ recipeDetail }) {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-800 bg-gray-50 min-h-screen">
      <div className="flex items-center mb-8 p-4 bg-white rounded-lg shadow-md">
        <img
          src={recipeDetail.image}
          alt={recipeDetail.name}
          className="w-36 h-36 object-cover rounded-md shadow-lg"
        />
        <h1 className="text-4xl font-bold ml-6">{recipeDetail.name}</h1>
      </div>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {recipeDetail.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipeDetail.instructions.map((instruction, index) => (
            <li key={index} className="text-lg">
              {instruction}
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Details</h2>
        <div className="space-y-2">
          <p>
            <strong className="font-medium">Prep Time:</strong>{" "}
            {recipeDetail.prepTimeMinutes} minutes
          </p>
          <p>
            <strong className="font-medium">Cook Time:</strong>{" "}
            {recipeDetail.cookTimeMinutes} minutes
          </p>
          <p>
            <strong className="font-medium">Servings:</strong>{" "}
            {recipeDetail.servings}
          </p>
          <p>
            <strong className="font-medium">Difficulty:</strong>{" "}
            {recipeDetail.difficulty}
          </p>
          <p>
            <strong className="font-medium">Cuisine:</strong>{" "}
            {recipeDetail.cuisine}
          </p>
          <p>
            <strong className="font-medium">Calories per Serving:</strong>{" "}
            {recipeDetail.caloriesPerServing}
          </p>
          <div className="mt-2">
            <strong className="font-medium">Tags:</strong>
            <div className="mt-1">
              {recipeDetail.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm font-semibold mr-2 mb-2 transition-colors hover:bg-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-700 bg-white p-6 rounded-lg shadow-md">
        <p className="mb-2">
          <strong className="font-medium">Rating:</strong> {recipeDetail.rating}{" "}
          (based on {recipeDetail.reviewCount} reviews)
        </p>
        <p>
          <strong className="font-medium">Meal Type:</strong>{" "}
          {recipeDetail.mealType.join(", ")}
        </p>
      </div>
    </div>
  )
}
