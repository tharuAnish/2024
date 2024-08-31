import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import BackBtn from "../back-btn"

export default function RecipeList({ recipeList }) {
  return (
    <div className="mx-auto sm:max-w-full md:max-w-4xl lg:max-w-6xl py-20">
      <div className="flex justify-between">
        <CardTitle className="mb-9">Recipes</CardTitle> <BackBtn />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => (
              <Link
                href={`/recipe-list/${recipe.id}`}
                className="hover:shadow-xl transition-all"
              >
                <Card className="overflow-hidden">
                  <img
                    className="overflow-hidden"
                    src={recipe.image}
                    alt={recipe.name}
                  />

                  <div className=" p-4 ">
                    <CardTitle className="text-lg truncate">
                      {recipe.name}
                    </CardTitle>
                    <div className="flex mt-2 justify-between">
                      <CardDescription>{recipe.rating}</CardDescription>
                      <CardDescription className="font-bold">
                        {recipe.cuisine}
                      </CardDescription>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  )
}
