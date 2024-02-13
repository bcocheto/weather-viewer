interface ColorShades {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
}

interface ColorPalette {
  primary: string
  secondary: string
  white: string
  sand: string
  gray: ColorShades
  success: string
  warning: string
  error: string
}

interface ShadowValues {
  default: string
  hover: string
  focused: string
}

export type Theme = {
  colors: ColorPalette
  shadows: ShadowValues
  appTitleColor: string
  backgroundGradient: {
    color1: string
    color2: string
  }
  panelBgColor: string
  panelTitleColor: string
  forecastPanelBgColor: string
  searchInput: {
    color: string
    placeholderColor: string
  }
  temperatureSwitch: {
    backgroundColor: string
    sliderColor: string
    textColor: string
  }
  searchSuggestion: {
    backgroundColor: string
    hoverBackgroundColor: string
    seperatorLineColor: string
  }
  smallIconColor: string
  smallIconTextColor: string
}
