import Link from "next/link"

export default function Home() {
  return (
    <main className=" min-h-screen  grid place-content-center  p-24">
      <div className="border px-40 py-24 rounded-xl text-center">
        <h1 className="font-bold text-2xl mb-2">Welcome to Recipe App</h1>
        <Link href={"/recipe-list"}>Explore Recipes </Link>
      </div>
    </main>
  )
}
