export function convertTimeStringToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number)

  console.log(hours * 60 + minutes)
  return hours * 60 + minutes
}
