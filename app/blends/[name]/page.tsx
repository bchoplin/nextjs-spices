import type { Metadata } from 'next'
import { fetchBlend, fetchSpices } from "@/data/api"
import Title from "@/components/Title"

export async function generateMetadata({ params }: {
  params: { name: string }
}): Promise<Metadata> {
  const blend = await fetchBlend(decodeURIComponent(params.name))
  const spices = await fetchSpices()

  if (!blend) return {}

  const spicesInBlend = spices?.filter(spice => blend.spices.includes(spice.id))
  const spiceList = spicesInBlend.map(spice => spice.name).join(", ")

  return {
    title: `${blend.name} - Spice Blend | ${process.env.siteTitle}`,
    description: `Learn all about ${blend.name}. This blend contains ${spiceList}`
  }
}

const Blend = async ({ params }: {
  params: { name: string }
}): Promise<JSX.Element> => {
  const blend = await fetchBlend(decodeURIComponent(params.name))
  const spices = await fetchSpices()

  if (!blend) {
    return (
      <p>Sorry, no blends were found.</p>
    )
  }

  const spicesInBlend = spices?.filter(spice => blend.spices.includes(spice.id))
  const cellClasses = "p-4 border-[1px]"

  return (
    <>
      <Title
        titleType="pageTitle"
        backLink="/blends"
        backLinkText="Back to Blends"
      >
        {blend.name || "Unknown Blend"}
      </Title>
      <h2 className="text-lg mb-6">Blend Details</h2>
      <table className="table-auto w-full md:w-6/12 border-[1px] text-left">
        <tbody>
          {blend.name &&
            <tr>
              <th scope="row" className={cellClasses}>Name:</th>
              <td className={cellClasses}>{blend.name}</td>
            </tr>
          }
          {spicesInBlend &&
            <tr>
              <th scope="row" className={cellClasses}>Spices:</th>
              <td className={cellClasses}>
                {spicesInBlend.map(spice => (
                  <p key={spice.id}>{spice.name}</p>
                ))}
              </td>
            </tr>
          }
          {blend.description &&
            <tr>
              <th scope="row" className={cellClasses}>Description:</th>
              <td className={cellClasses}>{blend.description}</td>
            </tr>
          }
        </tbody>
      </table>
    </>
  )
}

export default Blend