const capitalizeString = (str: string): string => {
  const strArr = str.split(" ")
  const capitalizedStrArr = []

  for (let i = 0; i < strArr.length; i++) {
    const currentWord = strArr[i]
    const capitalizedWord = currentWord[0].toUpperCase() + currentWord.slice(1)
    capitalizedStrArr.push(capitalizedWord)
  }

  return capitalizedStrArr.join(" ")
}

export default capitalizeString
