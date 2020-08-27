import { h } from 'preact'
import useFetch from '../hook/useFetch'
import { Shop } from '../api/gurunaviAPI'

const App = () => {
  const data = useFetch<Shop>({ rest: [] }, 'bar')

  return (
    <div>
      <div>Hello Preact</div>
      <ul>
        {data.rest.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
