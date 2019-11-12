import express from 'express'
import path from 'path'
import stateRoutes from './server/stateRoutes'
import Loadable from 'react-loadable'


const app = express()

app.use(express.static('public'))
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

const PORT = process.env.PORT || 3000
Loadable.preloadAll().then(() => app.listen(PORT, '0.0.0.0', () => {
  console.log(`The app is running in PORT ${PORT}`)
}))

stateRoutes(app)
