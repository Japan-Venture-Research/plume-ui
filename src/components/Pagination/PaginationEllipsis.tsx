import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'span'
type Available = typeof defaultTag | 'li'

export type PaginationEllipsisProps<T extends Available = typeof defaultTag> = {
} & BaseProps<T>

export const PaginationEllipsis = <T extends Available>({
  className,
  ...props
}: PaginationEllipsisProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(
        'pl-pagination-ellipsis',
        className
      )}
      {...props}
    >
        &hellip;
    </Base>
  )
}

PaginationEllipsis.displayName = 'Pagination.Ellipsis'
