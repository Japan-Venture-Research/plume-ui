import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'a'
type Available = typeof defaultTag | 'span' | 'div'

export type PaginationPreviousProps<T extends Available = typeof defaultTag> = {
    disabled?: boolean
} & BaseProps<T>

export const PaginationPrevious = <T extends Available>({
  className,
  ...props
}: PaginationPreviousProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(
        'pl-pagination-previous',
        { 'is-disabled': props.disabled},
        className
      )}
      {...props}
    >
      <i className="ri-arrow-left-s-line" />
    </Base>
  )
}

PaginationPrevious.displayName = 'Pagination.Previous'
