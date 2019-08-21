import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

export type ColumnGroupProps = {
  gapSize?: 'none' | 'small' | 'medium' | 'large'
} & BaseProps<'div' | 'span' | 'ul'>

export const ColumnGroup: React.FC<ColumnGroupProps> = ({
  as,
  className,
  ...props
}) => {
  const gapSize = props.gapSize && `is-gap-${props.gapSize}`

  return (
    <Base
      as={as || 'div'}
      className={classNames('pl-column-group', gapSize, className)}
      {...props}
    />
  )
}
