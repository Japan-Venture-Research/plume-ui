import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'li'
type Available = typeof defaultTag | 'span' | 'a'

export type PaginationItemProps<T extends Available = typeof defaultTag> = {
  active?: boolean
} & BaseProps<T>

export const PaginationItem = <T extends Available>({
  className,
  active,
  ...props
}: PaginationItemProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(
        'pl-pagination-item',
        { 'is-active': active },
        className
      )}
      {...props}
    />
  )
}

PaginationItem.displayName = 'Pagination.Item'
