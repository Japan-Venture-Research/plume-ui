import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

export type Props = {} & BaseProps<'div' | 'span' | 'ul'>

export const ButtonGroup: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Base
      as={props.as || 'div'}
      className={classNames('pl-button-group', className)}
      {...props}
    />
  )
}

ButtonGroup.displayName = 'Button.Group'
