import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_APOLLO_KEY
  return {
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
})

const createdHttpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI || ''
})

const httpLink = authLink.concat(createdHttpLink)

export { httpLink }