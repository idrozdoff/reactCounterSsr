import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { style } from './style'


@withStyles(style)
export default class Profile extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <Paper elevation={4} className={classes.paper} align="center">
          <Typography variant="h5">Profile Page</Typography>
        </Paper>
    )
  }
}
