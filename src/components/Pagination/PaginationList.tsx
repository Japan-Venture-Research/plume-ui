import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'ul'
type Available = typeof defaultTag | 'div'

export type PaginationListProps<T extends Available = typeof defaultTag> =
  {} & BaseProps<T>

export const PaginationList = <T extends Available>({
  className,
  ...props
}: PaginationListProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-pagination-list', className)}
      {...props}
    />
  )
}

PaginationList.displayName = 'Pagination.List'
