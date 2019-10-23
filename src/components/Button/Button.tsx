import classNames from 'classnames'
import * as React from 'react'
import { Base, BaseProps } from '../../internal/Base'
import { ButtonGroup } from './ButtonGroup'

export { ButtonGroupProps } from './ButtonGroup'

const defaultTag = 'button'
type Available = typeof defaultTag | 'span' | 'div'

export type ButtonProps<T extends Available = typeof defaultTag> = {
  color?: 'light' | 'black' | 'white'
  size?: 'small' | 'normal' | 'large'
  outlined?: boolean
  round?: boolean
  disabled?: boolean
  fullwidth?: boolean
} & BaseProps<T>

export const Button = Object.assign(
  <T extends Available>({
    round = false,
    disabled = false,
    outlined = false,
    fullwidth = false,
    className,
    ...props
  }: ButtonProps<T>) => {
    const colorName = props.color && `is-${props.color}`
    const size = `is-${props.size || 'normal'}`

    return (
      <Base
        as={props.as || defaultTag}
        className={classNames(
          'pl-button',
          colorName,
          size,
          { 'is-outlined': outlined },
          { 'is-round': round },
          { 'is-fullwidth': fullwidth },
          className
        )}
        disabled={disabled}
        {...props}
      />
    )
  },
  { Group: ButtonGroup }
)
