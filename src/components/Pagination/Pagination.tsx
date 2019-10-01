import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { PaginationList } from './PaginationList'
import { PaginationItem } from './PaginationItem'
import { PaginationEllipsis } from './PaginationEllipsis'
import { PaginationPrevious } from './PaginationPrevious'
import { PaginationNext } from './PaginationNext'

export { PaginationListProps } from './PaginationList'
export { PaginationItemProps } from './PaginationItem'
export {PaginationEllipsisProps} from './PaginationEllipsis'
export {PaginationPreviousProps} from './PaginationPrevious'
export {PaginationNextProps} from './PaginationNext'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span'

export type PaginationProps<T extends Available = typeof defaultTag> = {
  children: React.ReactNode
} & BaseProps<T>

export const Pagination = Object.assign(
  <T extends Available>({ className, ...props }: PaginationProps<T>) => {
    return (
      <Base
        as={props.as || defaultTag}
        className={classNames('pl-pagination', className)}
        {...props}
      />
    )
  },
  { List: PaginationList },
  { Item: PaginationItem },
  { Ellipsis: PaginationEllipsis },
  { Previous: PaginationPrevious },
  { Next: PaginationNext }
)
