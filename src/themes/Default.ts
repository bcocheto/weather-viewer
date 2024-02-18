import { Theme } from '../types/Theme'

export const theme: Theme = {
  colors: {
    primary: '#8F98F6',
    secondary: '#5053E7',
    white: '#E1E2F4',
    sand: '#BC9890',
    gray: {
      50: '#F9FAFB',
      100: '#F2F3F4',
      200: '#E0E3E7',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',
      600: '#4A4A4A',
      700: '#212121',
      800: '#1A1A1A',
      900: '#000000',
    },
    success: '#00C897',
    warning: '#FF9800',
    error: '#F04438',
  },
  shadows: {
    default: '0 1px 3px rgba(0, 0, 0, 0.1)',
    hover: '0 4px 6px rgba(0, 0, 0, 0.15)',
    focused: '0 0 0 2px rgba(0, 0, 0, 0.2)',
  },
  backgroundGradient: {
    color1: '#E1E2F4',
    color2: '#5053E7',
  },
  smallIconColor: '#A1B9CE',
  smallIconTextColor: '#7B98B2',
}
