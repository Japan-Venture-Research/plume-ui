import * as React from 'react'

export type BaseProps<K extends keyof React.ReactHTML> = {
  as?: K
  className?: string
  style?: React.CSSProperties
} & React.ComponentPropsWithoutRef<K>

export const Base = <K extends keyof React.ReactHTML>(props: BaseProps<K>) => {
  const { as, ...rest } = props
  return React.createElement(as || 'div', rest)
}
