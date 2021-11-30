import { DefaultTheme } from 'react-native-paper'

const Colors = {
  primary: '#D9D3CE',
  secondary: '#7A7B77',
  background: '#2C3337',
  backgroundSecondary: '#000000',
  light: '#C8DB8E',
}

const Spaces = {
  smallest: 2,
  smaller: 4,
  small: 8,
  slab: 12,
  default: 16,
  two: 20,
  medium: 24,
  large: 32,
  larger: 48,
  largest: 64,
}

const FontSize = {
  smallest: 8,
  smaller: 10,
  small: 12,
  medium: 14,
  default: 16,
  two: 20,
  large: 24,
  larger: 32,
  largest: 48,
}

const AppTheme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.background,
    text: Colors.primary,
    border: Colors.secondary,
    notification: Colors.secondary,
  },
}

const ComponentTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    primary: Colors.primary,
    accent: Colors.secondary,
    background: Colors.backgroundSecondary,
    surface: Colors.background,
    placeholder: Colors.secondary,
    backdrop: Colors.background,
    text: Colors.primary,
    disabled: Colors.secondary,
    border: Colors.light,
    notification: Colors.light,
  },
}

export { AppTheme, ComponentTheme, FontSize, Spaces, Colors }
