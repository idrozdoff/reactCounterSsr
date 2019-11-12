import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { JssProvider } from 'react-jss'
import { create } from 'jss'
import {
  createMuiTheme,
  jssPreset,
  ServerStyleSheets, ThemeProvider
} from '@material-ui/core/styles'
import { jssTheme, jssStyle } from '../src/styles/jss'

import App from '../src/App'
import template from './template'

import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from '~/public/react-loadable.json'
import { Provider } from 'react-redux'

export default function render(url, store) {

  let modules = []

  const reactRouterContext = {}

  const sheets = new ServerStyleSheets();

  const jss = create({
    ...jssPreset(),
    insertionPoint: 'jss-server-side',
  })

  const theme = createMuiTheme(jssTheme)
  const sheet = jss.createStyleSheet(jssStyle)
  sheet.attach()

  let content = renderToString(
    sheets.collect(
      <StaticRouter location={url} context={reactRouterContext}>
        <Provider store={store} >
          <JssProvider jss={jss}>
            <ThemeProvider theme={theme}>
              <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                <App />
              </Loadable.Capture>
            </ThemeProvider>
          </JssProvider>
        </Provider>
      </StaticRouter >
    )
  )

  const helmet = Helmet.renderStatic()

  let bundles = getBundles(stats, modules)

  return template(sheets, helmet, content, bundles, store.getState())

}
