import 'whatwg-fetch'
import Cookies from 'js-cookie'

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null
  }

  return response.json()
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  // Convert ReadableStream object
  // https://developer.mozilla.org/en-US/docs/Web/API/Body
  return response.json()
    .then(res => {
      const error = new Error(res.statusText)

      error.response = res
      throw error
    })
}

/**
 * Override option method method
 * @param {object} options request option
 * @param {string} overrideMethod request method
 */
const setupRequestOptions = (options = {}, overrideMethod) => {
  // This is my setting for cookies token, replace the token by your own
  const userFromCookie = Cookies.getJSON('user')
  const token = userFromCookie && userFromCookie.data ? userFromCookie.data.token : null

  const newOptions = {
    headers: {
      Accept: 'application/json',
    },
  }

  if (token) newOptions.headers.authorization = `Bearer ${token}`
  if (overrideMethod) newOptions.method = overrideMethod
  if (options.body) {
    newOptions.headers['Content-Type'] = 'application/json'
    newOptions.body = options.body
  }

  return newOptions
}

/**
 * Request API by fetch with JSON format
 * @param {string} url api endpoint
 * @param {object} options request option
 * @param {string} overrideMethod request method
 */
const fetchJSON = (url, options, overrideMethod) => {
  const newOptions = setupRequestOptions(options, overrideMethod)

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
}

export const getRequest = (url, options) => fetchJSON(url, options, 'GET')
