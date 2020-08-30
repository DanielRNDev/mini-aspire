import axios from 'axios'

const getCurrentUserData = async (userId) => {
  const response = await axios.get(`http://192.168.1.242:3000/users/${userId}`)

  return response?.data
}

const getCurrentLoan = async (userId) => {
  const response = await axios.get(`http://192.168.1.242:3000/loans?userId=${userId}`)

  return response?.data
}

const addNewLoan = async (data, callback) => {
  const response = await axios.post(`http://192.168.1.242:3000/add-loan`, data)
  typeof callback === 'function' && callback(response?.data)
}

const repay = async (data, callback) => {
  const response = await axios.post(`http://192.168.1.242:3000/repay`, data)
  typeof callback === 'function' && callback(response?.data)
}

export {
  getCurrentUserData,
  getCurrentLoan,
  addNewLoan,
  repay
}
