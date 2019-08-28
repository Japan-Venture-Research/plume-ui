import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'hr'
type Available = 'hr' | 'div' | 'span'

export type DividerProps<T extends Available = typeof defaultTag> = {
  dashed?: boolean
} & BaseProps<T>

export const Divider = <T extends Available>({
  dashed = false,
  className,
  ...props
}: DividerProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-divider', { 'is-dashed': dashed }, className)}
      {...props}
    />
  )
}

Divider.displayName = 'Divider'
