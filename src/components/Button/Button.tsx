import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { ButtonGroup } from './ButtonGroup'

type Props = {
  color?: 'light' | 'black' | 'white'
  size?: 'small' | 'normal' | 'medium' | 'large'
  outlined?: boolean
  rounded?: boolean
  disabled?: boolean
} & BaseProps<'button'>

export const Button = Object.assign(
  ({
    rounded = false,
    disabled = false,
    outlined = false,
    className,
    ...props
  }: Props) => {
    const colorName = props.color && `is-${props.color}`
    const size = `is-${props.size || 'normal'}`

    return (
      <Base
        as={props.as || 'button'}
        className={classNames(
          'pl-button',
          colorName,
          size,
          { 'is-outlined': outlined },
          { 'is-rounded': rounded },
          className
        )}
        disabled={disabled}
        {...props}
      />
    )
  },
  { Group: ButtonGroup }
)
