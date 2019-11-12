import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

export default function LoadableHOC(opts) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 400
  }, opts))
}
