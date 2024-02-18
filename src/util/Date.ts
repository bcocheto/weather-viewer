export function convertDate(dateString: string) {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.getMonth()
  const hour = date.getHours()

  return `${day}/${month} - ${hour} h`
}
