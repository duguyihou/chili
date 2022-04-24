import { ApolloClient, NormalizedCacheObject, ApolloLink } from '@apollo/client'

import { httpLink } from './link-http'
import { errorLink } from './link-error'
import { localCache, initLocalCache } from './local-cache'
import { localResolvers } from './resolvers'

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient(
  {
    link: ApolloLink.from([errorLink, httpLink]),
    // Note: httpLink is terminating so must be last, while retry & error wrap
    // the links to their right. State & context links should happen before (to
    // the left of) restLink.
    connectToDevTools: process.env.NODE_ENV !== 'production',
    cache: localCache,
    assumeImmutableResults: true,
    resolvers: localResolvers,
  }
)

initLocalCache()