import type { NextPage } from 'next'
import { useBusinessSearch } from '../hooks/queries'

const Home: NextPage = () => {
  const variables = {
    term: 'burrito',
    location: 'san francisco',
  }
  const { data } = useBusinessSearch(variables)
  if (data) console.log('🐵 data ------ ', data.toString())
  return <div className="flex text-2xl">Hello paella</div>
}

export default Home
