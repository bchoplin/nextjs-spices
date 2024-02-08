"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'

const HeaderLink = ({
  slug,
  children,
}: {
  slug: string | null,
  children: React.ReactNode
}) => {

  const segment = useSelectedLayoutSegment()
  const isActive = slug === segment

  let href = "/"

  if (slug !== null) {
    href = `/${slug}`
  }

  return (
    <Link
      href={href}
      className={`hover:underline${isActive ? ' font-bold' : ''}`}
    >
      {children}
    </Link>
  )
}

export default HeaderLink
