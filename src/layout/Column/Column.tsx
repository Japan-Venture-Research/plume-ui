import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { ColumnGroup } from './ColumnGroup'

export { ColumnGroupProps } from './ColumnGroup'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span' | 'li' | 'a'

export type ColumnProps<T extends Available = typeof defaultTag> = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
} & BaseProps<T>

export const Column = Object.assign(
  <T extends Available>({ className, size, ...props }: ColumnProps<T>) => {
    const sizeClass = size && `is-${size}`

    return (
      <Base
        as={props.as || defaultTag}
        className={classNames('pl-column', sizeClass, className)}
        {...props}
      />
    )
  },
  { Group: ColumnGroup }
)
