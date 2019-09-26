import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span' | 'ul'

export type ColumnGroupProps<T extends Available = typeof defaultTag> = {
  gapSize?: 'none' | 'small' | 'medium' | 'large'
  from?: 'small' | 'medium'
} & BaseProps<T>

export const ColumnGroup = <T extends Available>({
  className,
  from,
  gapSize,
  ...props
}: ColumnGroupProps<T>) => {
  const gapSizeClass = gapSize && `is-gap-${gapSize}`

  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(
        'pl-column-group',
        gapSizeClass,
        { 'from-small': from === 'small' },
        { 'from-medium': from === 'medium' },
        className
      )}
      {...props}
    />
  )
}

ColumnGroup.displayName = 'ColumnGroup'
