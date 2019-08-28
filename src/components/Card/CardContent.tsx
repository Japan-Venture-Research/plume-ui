import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'div'
type Available = typeof defaultTag | 'a'

export type CardContentProps<
  T extends Available = typeof defaultTag
> = {} & BaseProps<T>

export const CardContent = <T extends Available>({
  className,
  ...props
}: CardContentProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-card-content', className)}
      {...props}
    />
  )
}

CardContent.displayName = 'CardContent'
