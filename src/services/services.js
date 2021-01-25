import { cities } from '../context/api'

const findByCityName = (cityName) => {
  const data = cities.find((item) => item.cityName === cityName)
  console.log('Find data', [data])
  return [data]
}
// const findLineByCity = (id) => {
//   return http.get(`/city/${id}/line`)
// }
// const findOperatorByCity = (id) => {
//   return http.get(`/city/${id}/operators`)
// }
// const findTicketByCity = (id) => {
//   return http.get(`/city/${id}/ticket`)
// }
export default {
  findByCityName,
  // findLineByCity,
  // findOperatorByCity,
  // findLineByCity,
  // findTicketByCity,
}
