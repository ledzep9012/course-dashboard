export const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}

export const mediaQueries = key => {
  return style => `@media (min-width: ${breakpoints[key]}) { ${style} }`
}

export const mediaQueriesMax = key => {
  return style => `@media (max-width: ${breakpoints[key]}) { ${style} }`
}