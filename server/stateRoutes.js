import ssr from './server'
import configureStore from '../src/store/configureStore'
import rootSaga from '../src/sagas'

const initialState = {
  count: 5
}

const store = configureStore(initialState)

export default function (app) {
  app.get('*', (req, res) => {
    store.runSaga(rootSaga).toPromise().then(() => {
      const response = ssr(req.url, store)
      res.send(response)
    }).catch((e) => {
      console.log(e.message)
      res.status(500).send(e.message)
    })
    store.close()
  })
}
