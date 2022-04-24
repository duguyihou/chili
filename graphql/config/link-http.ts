import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { envConfig } from '../../utils/constants'

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      'Authorization': envConfig.apolloKey ? `Bearer ${envConfig.apolloKey}` : null,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
})

const createdHttpLink = createHttpLink({
  uri: envConfig.apolloUri || '',
})

const httpLink = authLink.concat(createdHttpLink)

export { httpLink }