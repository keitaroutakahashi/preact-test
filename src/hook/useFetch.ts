import { useState, useEffect } from 'preact/hooks'
import { getData } from '../api/gurunaviAPI'

export default <T>(state: T, parameter: string) => {
  const [data, setData] = useState<T>(state)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData<T>(parameter)
      setData(data)
    }

    fetchData()
  }, [])

  return data
}
