import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { NavLink as Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { style } from './style'


@withStyles(style)
export default class Header extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            <Link className={classes.link} to="/">
              SSR
          </Link>
            <Link className={classes.link} to="/profile">
              Profile
          </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
