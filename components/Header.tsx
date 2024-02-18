"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'
import Title from "@/components/Title"
import HeaderLink from "@/components/HeaderLink"

const Header = ({ title }: { title: string | undefined }) => {
  const segment = useSelectedLayoutSegment()
  const isHome = segment === null

  return (
    <header className="px-12 py-8">
      <Title titleType={isHome ? "siteTitleHome" : "siteTitlePage"}>
        <Link href="/">{title}</Link>
      </Title>
      <nav>
        <ul className="flex gap-4">
          <li>
            <HeaderLink slug={null}>
              Home
            </HeaderLink>
          </li>
          <li>
            <HeaderLink slug="spices">
              Spices
            </HeaderLink>
          </li>
          <li>
            <HeaderLink slug="blends">
              Blends
            </HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
