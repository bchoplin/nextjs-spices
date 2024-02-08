const heatEmojis = (emojiCount: number | undefined) => {
    let emojis = ""

    if (typeof emojiCount === "undefined") return

    for (let i = 0; i < emojiCount; i++) {
        emojis += "🌶"
    }

    return emojis
}

export default heatEmojis