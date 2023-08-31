import * as React from 'react'
import { transformModifiers, Modifiable } from '../helpers/modifier'

export type BaseProps<K extends keyof React.ReactHTML> = {
  as?: K
  style?: React.CSSProperties
} & Omit<React.AllHTMLAttributes<K>, 'size'> &
  Modifiable

export const Base = <K extends keyof React.ReactHTML>(props: BaseProps<K>) => {
  const { as, ...rest } = props
  return React.createElement(as || 'div', transformModifiers(rest))
}
