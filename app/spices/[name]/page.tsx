import type { Metadata } from 'next'
import { fetchSpice } from "@/data/api"
import Title from "@/components/Title"
import hexCodify from "@/utils/hexCodify"
import heatEmojis from "@/utils/heatEmojis"

export async function generateMetadata({ params }: {
    params: { name: string }
  }
): Promise<Metadata> {
  const spice = await fetchSpice(decodeURIComponent(params.name))

  if (!spice) return {}

  return {
    title: `${spice.name} - Spice | ${process.env.siteTitle}`,
    description: `Learn all about ${spice.name}. This spice is rated as ${spice.price} for cost and ${spice.heat} for heat.`
  }
}

const Spices = async ({ params }: {
  params: { name: string }
}): Promise<JSX.Element> => {
  const spice = await fetchSpice(decodeURIComponent(params.name))

  if (!spice) {
    return (
      <p>Sorry, no spices were found.</p>
    )
  }

  const cellClasses = "p-4 border-[1px]"

  return (
    <>
      <Title
        titleType="pageTitle"
        backLink="/spices"
        backLinkText="Back to Spices"
      >
        {spice.name || "Unknown Spice"}
      </Title>
      <h2 className="text-lg mb-6">Spice Details</h2>
      <table className="table-auto w-full md:w-6/12 border-[1px] text-left">
        <tbody>
          {spice.name &&
            <tr>
              <th scope="row" className={cellClasses}>Name:</th>
              <td className={cellClasses}>{spice.name}</td>
            </tr>
          }
          {spice.price &&
            <tr>
              <th scope="row" className={cellClasses}>Price:</th>
              <td className={cellClasses}>{spice.price}</td>
            </tr>
          }
          {typeof spice.heat === "number" &&
            <tr>
              <th scope="row" className={cellClasses}>Heat:</th>
              <td className={cellClasses}>{spice.heat === 0 ? `None` : heatEmojis(spice.heat)}
              <span className="sr-only">{spice.heat}</span></td>
            </tr>
          }
          {hexCodify(spice.color) &&
            <tr>
              <th scope="row" className={cellClasses}>Color:</th>
              <td style={{ backgroundColor: hexCodify(spice.color) }}>
                <span className="sr-only">{hexCodify(spice.color)}</span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </>
  )
}

export default Spices