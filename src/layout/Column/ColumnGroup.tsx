import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

type Props = BaseProps<'div' | 'span' | 'ul'>

export const ColumnGroup: React.FC<Props> = ({ as, className, ...props }) => {
  return (
    <Base
      as={as || 'div'}
      className={classNames('pl-column-group', className)}
      {...props}
    />
  )
}
