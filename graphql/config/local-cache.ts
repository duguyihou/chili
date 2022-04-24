import { InMemoryCache } from '@apollo/client'


export const localCache = new InMemoryCache({

})

/**
 * Storing local state in the cache
 * https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/#storing-local-state-in-the-cache
 */
export function initLocalCache() {
  // localCache.writeQuery({
  //   query: IS_LOGGED_IN,
  //   data: {
  //     isLoggedIn: !!localStorage.getItem("token"),
  //   },
  // });
}

/**
 * Reactive variables: https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/#storing-local-state-in-reactive-variables
 * Set initial values when we create cache variables.
 */

