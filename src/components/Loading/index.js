import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { style } from './style'

@withStyles(style)
export default class Loading extends React.Component {
  render() {
    const { classes, error, pastDelay } = this.props
    return (
      <Fragment>
      {error ? (
      <div className={classes.div} onClick={ () => window.location.reload(true) } align="center">
        <h3>
          Please, click here or reload the page. New content is ready.
        </h3>
      </div>
      )
        : pastDelay ? (
          <CircularProgress color="primary"/>
        ) 
        : null
      }
      </Fragment>
    )
  }
}
