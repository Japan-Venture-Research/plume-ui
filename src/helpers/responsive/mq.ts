import { Breakpoint, breakpoint } from '../../styles/breankpoint'

/**
 * Return media query of given breakpoint key or number
 */
export const mq = (n: keyof Breakpoint | number) => {
  if (typeof n === 'number') {
    return `@media (min-width: ${n}px)`
  }

  const arr = Object.keys(breakpoint).map(k => [
    k,
    breakpoint[k as keyof Breakpoint],
  ])

  const [result] = arr.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}
