export const parseJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    return null
  }
}
