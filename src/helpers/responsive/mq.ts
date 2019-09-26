import { breakpoint } from '../../styles/breakpoint'

const min = (from: number) => {
  return `@media (min-width: ${from}px)`
}

const max = (to: number) => {
  return `@media (max-width: ${to}px)`
}

const between = (from: number, to: number) => {
  return `@media (min-width: ${from}px) and (max-width: ${to}px)`
}

export const mq = {
  min,
  max,
  between,
  small: max(breakpoint.medium - 1),
  medium: min(breakpoint.medium),
  mediumOnly: between(breakpoint.medium, breakpoint.large - 1),
  large: min(breakpoint.large),
  largeOnly: between(breakpoint.large, breakpoint.extraLarge - 1),
  extraLarge: min(breakpoint.extraLarge),
  untilMedium: max(breakpoint.large - 1),
  untilLarge: max(breakpoint.extraLarge - 1)
}
