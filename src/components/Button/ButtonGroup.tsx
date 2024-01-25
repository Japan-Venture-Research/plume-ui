import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span' | 'ul'

export type ButtonGroupProps<T extends Available = typeof defaultTag> =
  {} & BaseProps<T>

export const ButtonGroup = <T extends Available>({
  className,
  ...props
}: ButtonGroupProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-button-group', className)}
      {...props}
    />
  )
}

ButtonGroup.displayName = 'Button.Group'
