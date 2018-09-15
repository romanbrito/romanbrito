import {SIMPLE_API} from './constants'

export const fetchQuery = (operation) => {
  return fetch(SIMPLE_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text
    }),
  }).then(response => {
    return response.json()
  })
}
