import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

type Props = {
  dashed?: boolean
} & BaseProps<'hr' | 'div' | 'span'>

export const Divider: React.FC<Props> = ({
  dashed = false,
  className,
  ...props
}) => {
  return (
    <Base
      as={props.as || 'hr'}
      className={classNames('pl-divider', { 'is-dashed': dashed }, className)}
      {...props}
    />
  )
}
