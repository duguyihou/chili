import { BUSINESS_SEARCH_QUERY } from '../graphql/queries/business'
import { useQuery } from '@apollo/client';

export const useBusinessSearch = (variables: Record<string, string | number>) => {
  const queryResult = useQuery(BUSINESS_SEARCH_QUERY, { variables })
  console.log('🐵  ------ queryResult', queryResult)
  return queryResult
}