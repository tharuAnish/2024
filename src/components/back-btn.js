"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function BackBtn() {
  const router = useRouter()

  function handleClick() {
    router.back()
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      Back
    </Button>
  )
}
