const hexCodify = (color: string | undefined): string | undefined => {
  if (typeof color === "undefined") return

  const hex = color[0] === "#" ? color : `#${color}`
  const isHex = /^#[0-9A-F]{6}$/i.test(hex)

  if (isHex) {
    return hex
  }
}

export default hexCodify
