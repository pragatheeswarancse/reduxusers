import '../styles/globals.css'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import userReducer from '../redux/reducer'

function MyApp({ Component, pageProps }) {
  const store = createStore(userReducer)
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
