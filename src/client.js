import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles'
import { jssTheme } from '../src/styles/jss'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

const theme = createMuiTheme(jssTheme)

const state = window.__STATE__
const store = configureStore(state)
store.runSaga(rootSaga)

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

Loadable.preloadReady().then(() => {
  hydrate(<Main />, document.querySelector('#app'))
})
