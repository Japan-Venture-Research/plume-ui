import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { ColumnGroup } from './ColumnGroup'

export type ColumnProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
} & BaseProps<'div' | 'span' | 'li' | 'a'>

export const Column = Object.assign(
  ({ as, className, ...props }: ColumnProps) => {
    const size = props.size && `is-${props.size}`

    return (
      <Base
        as={as || 'div'}
        className={classNames('pl-column', size, className)}
        {...props}
      />
    )
  },
  { Group: ColumnGroup }
)
