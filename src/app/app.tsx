import { h } from 'preact'
import { useReducer } from 'preact/hooks'
import Router, { Route } from 'preact-router'
import reducer, {
  initialState,
  ShopStateContext,
  ShopDispatchContext,
} from '../features/top/shopReducer'
import Top from '../features/top/top'
import About from '../features/about/about'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ShopStateContext.Provider value={{ state }}>
      <ShopDispatchContext.Provider value={{ dispatch }}>
        <div>
          <div>Hello Preact</div>
          <header>
            <a href="/">Home</a>
            <a href="/about">about</a>
          </header>
          <Router>
            <Route path="/" component={Top}></Route>
            <Route path="/about" component={About}></Route>
          </Router>
        </div>
      </ShopDispatchContext.Provider>
    </ShopStateContext.Provider>
  )
}

export default App
