import Link from "next/link"

type TitleTypes = "siteTitleHome" | "siteTitlePage" | "pageTitle"

const Title = ({ titleType, backLink, backLinkText, children }: {
  titleType: TitleTypes,
  backLink?: string,
  backLinkText?: string,
  children: React.ReactNode
}) => {
  let titleClasses = ""
  let wrapperClasses = ""

  const wrapperClassNames = {
    siteTitle: [
      "mb-4",
    ],
    pageTitle: [
      "mb-12",
      "pb-4",
      "border-b-2",
      "flex",
      "justify-between",
      "items-end",
    ]
  }

  if (titleType.includes("siteTitle")) {
    titleClasses = "text-3xl"
    wrapperClasses = wrapperClassNames.siteTitle.join(" ")
  } else {
    titleClasses = "text-2xl"
    wrapperClasses = wrapperClassNames.pageTitle.join(" ")
  }

  let title = (
    <h1 className={titleClasses}>{children}</h1>
  )

  if (titleType === "siteTitlePage") {
    title = (
      <div className={titleClasses}>{children}</div>
    )
  }

  return (
    <div className={wrapperClasses}>
      {title}
      {backLink &&
        <Link href={backLink} className="text-sm hover:underline">
          {backLinkText ? backLinkText : "Back"}
        </Link>
      }
    </div>
  )
}

export default Title