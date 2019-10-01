import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'a'
type Available = typeof defaultTag | 'span' | 'div'

export type PaginationNextProps<T extends Available = typeof defaultTag> = {
  disabled?: boolean
} & BaseProps<T>

export const PaginationNext = <T extends Available>({
  className,
  ...props
}: PaginationNextProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(
        'pl-pagination-next',
        { 'is-disabled': props.disabled},
        className
      )}
      {...props}
    >
      <i className="ri-arrow-right-s-line" />
    </Base>
  )
}

PaginationNext.displayName = 'Pagination.Next'
