/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import Title from "@/components/Title"
 
it('a back link appears in the Title component when desired', () => {

  render(
    <Title titleType="pageTitle" backLink="/spices" backLinkText="Back to Spices">
      Black Garlic Cloves
    </Title>
  )

  expect(screen.getByText('Back to Spices')).toBeDefined()
})