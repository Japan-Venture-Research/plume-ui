import * as React from 'react'
import { PartialBy } from '../types'

type InputBaseProps<K extends keyof React.ReactHTML> = {
  as: K
  className?: string
  style?: React.CSSProperties
} & React.ComponentPropsWithoutRef<K>

export type BaseProps<K extends keyof React.ReactHTML> = PartialBy<
  InputBaseProps<K>,
  'as'
>

export const Base = <K extends keyof React.ReactHTML>(
  props: InputBaseProps<K>
) => {
  return React.createElement(props.as, props)
}
