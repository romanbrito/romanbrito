import {SIMPLE_API} from './constants'

export const fetchQuery = (operation, variables) => {
  return fetch(SIMPLE_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, variables
    })
  }).then(response => {
    return response.json()
  })
}
