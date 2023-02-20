/* eslint-disable camelcase */
import jwt_decode from "jwt-decode"

const setToken = (token: string) => {
  localStorage.setItem("token", token)
}

const setRefreshToken = (token: string) => {
  localStorage.setItem("refreshToken", token)
}

const getToken = () => {
  return localStorage.getItem("token")
}

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken")
}

const getDecodedJwt = () => {
  try {
    const token = getToken()
    return jwt_decode(token!)
  } catch (e) {
    return {}
  }
}

const removeToken = () => {
  localStorage.removeItem("token")
}

const logOut = () => {
  removeToken()
  window.location.replace("/")
}

const isAuthenticated = () => {
  try {
    const decodedToken = getDecodedJwt()

    const { exp } = decodedToken as { exp: number }
    const currentTime = Date.now() / 1000

    return exp > currentTime
  } catch (e) {
    return false
  }
}

const Auth = {
  isAuthenticated,
  getDecodedJwt,
  setToken,
  getToken,
  setRefreshToken,
  getRefreshToken,
  removeToken,
  logOut,
}

export default Auth
