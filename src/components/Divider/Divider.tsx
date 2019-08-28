import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

type Available = 'hr' | 'div' | 'span'

type Props<T extends Available> = {
  dashed?: boolean
} & BaseProps<T>

export const Divider = <T extends Available>({
  dashed = false,
  className,
  ...props
}: Props<T>) => {
  return (
    <Base
      as={props.as || 'hr'}
      className={classNames('pl-divider', { 'is-dashed': dashed }, className)}
      {...props}
    />
  )
}
