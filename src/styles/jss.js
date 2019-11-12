
import purple from '@material-ui/core/colors/purple'
import { constantStyle } from './constant'

export const jssStyle = {
}

export const jssTheme = {
  ...constantStyle,
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
  overrides: {
    MuiTypography: {
      body2: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: '20px',
      },
    },
    MuiTouchRipple: {
      root: {
        color: '#1B7ADD'
      }
    },
    MuiInputBase: {
      inputType: {
        height: 'auto',
      },
    },
    MuiLinearProgress: {
      root: {
        height: 3,
      },
      barColorPrimary: {
        backgroundColor: '#1B7ADD',
      },
    },
  },
}
