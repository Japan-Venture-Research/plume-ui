export interface Breakpoint {
  medium: number
  large: number
  extraLarge: number
}

export const breakpoint: Breakpoint = {
  medium: 420,
  large: 770,
  extraLarge: 1120,
} as const
