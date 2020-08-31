import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { styled, setup } from 'goober'
import useFetch from '../../hook/useFetch'
import { Shop } from '../../api/gurunaviAPI'
import { actions, ShopStateContext, ShopDispatchContext } from './shopReducer'

setup(h)

const Top = () => {
  const shopStateContext = useContext(ShopStateContext)
  const shopDispatchContext = useContext(ShopDispatchContext)
  const { state } = shopStateContext
  const { dispatch } = shopDispatchContext

  const data = useFetch<Shop>({ rest: [] }, 'bar')

  return (
    <div>
      <StyledStateText>{state.name}</StyledStateText>
      <input
        type="text"
        onInput={(e) => {
          const name = e.currentTarget.value
          dispatch(actions.inputName(name))
        }}
      />
      <ul>
        {data.rest.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  )
}

const StyledStateText = styled('div')`
  margin-bottom: 20px;
`

export default Top
