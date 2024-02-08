import Link from "next/link"
import slugify from "slugify"
import hexCodify from "@/utils/hexCodify"
import heatEmojis from "@/utils/heatEmojis"

type DataItemProps = {
  name: string,
  color?: string,
  price?: string,
  heat?: number,
  dataType: DataType,
  dataStyle: "list" | "cards",
}

const DataItem = ({
  name,
  color,
  price,
  heat,
  dataType,
  dataStyle,
}: DataItemProps) => {
  const slug = slugify(name, { lower: true, remove: /[^a-zA-Z ]/g })

  const dataItemClasses = []

  if (dataStyle === "list") {
    dataItemClasses.push("hover:underline")
  }

  if (dataStyle === "cards") {
    dataItemClasses.push(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "md:h-48",
      "p-[5px]",
      "md:p-[20px]",
      "md:hover:p-0",
      "text-center",
      "border-2",
      "md:hover:border-[20px]",
      "transition-all"
    )
  }

  let styles = {}
  const hexCode = hexCodify(color)

  if (dataType === "spices" && hexCode) {
    styles = {
      borderColor: hexCode,
    }
  }

  return (
    <li>
      <Link
        href={`/${dataType}/${slug}`}
        className={dataItemClasses.join(" ")}
        style={styles}
      >
        <p className={dataStyle === "cards" ? "font-bold" : ""}>
          {name || "Unknown"}
        </p>
        {dataType === "spices" && dataStyle === "cards" &&
          <>
            <p className="my-2">
              {heatEmojis(heat)}
              <span className="sr-only">Heat rating is {heat} out of 5</span>
            </p>
            {price &&
              <p>
                <span className="sr-only">Price is </span>
                {price}
                <span className="sr-only"> out of five $</span>
              </p>
            }
          </>
        }
      </Link>
    </li>
  )
}

export default DataItem