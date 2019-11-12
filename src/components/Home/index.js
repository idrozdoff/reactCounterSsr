import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { style } from './style'


@withStyles(style)
export default class Home extends React.Component {
  render() {
    const {
      classes,
      count,
      increase,
      decrease,
      increaseAsync,
      decreaseAsync,
    } = this.props
    return (
      <Paper elevation={4} className={classes.paper} align="center">
        <Typography variant="h5">Redux-Counter</Typography>
        <Typography variant="subtitle1">Counter: {count}</Typography>
        <div className={classes.btns}>
          <Button variant="contained" color="primary" onClick={increase} className={classes.btn}>Increase</Button>
          <Button variant="contained" color="primary" onClick={decrease}>Decrease</Button>
        </div>
        <div className={classes.btns}>
          <Button variant="contained" color="primary" onClick={increaseAsync} className={classes.btn}>Async Increase</Button>
          <Button variant="contained" color="primary" onClick={decreaseAsync}>Async Decrease</Button>
        </div>
      </Paper>
    )
  }
}
