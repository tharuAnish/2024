import Link from "next/link"

export default function NotFound() {
  return (
    <div clasName=" min-h-screen  grid place-content-center  p-24">
      <p>404 - Page NotFound</p>
      <Link href={"/"}>Go back to home</Link>
    </div>
  )
}
