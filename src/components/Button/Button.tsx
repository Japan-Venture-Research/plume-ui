import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { ButtonGroup } from './ButtonGroup'

const defaultTag = 'span'
type Available = typeof defaultTag | 'span'

type ButtonProps<T extends Available> = {
  color?: 'light' | 'black' | 'white'
  size?: 'small' | 'normal' | 'medium' | 'large'
  outlined?: boolean
  rounded?: boolean
  disabled?: boolean
  fullwidth?: boolean
} & BaseProps<T>

export const Button = Object.assign(
  <T extends Available = typeof defaultTag>({
    rounded = false,
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
          { 'is-rounded': rounded },
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
