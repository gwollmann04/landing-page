export const customValidateName = (name: string) => {
  const regex = /^(\D*)$/
  return regex.test(String(name))
}
