import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

export type ColumnGroupProps = {
  gapSize?: 'none' | 'small' | 'medium' | 'large'
} & BaseProps<'div' | 'span' | 'ul'>

export const ColumnGroup: React.FC<ColumnGroupProps> = ({
  as,
  className,
  gapSize,
  ...props
}) => {
  const gapSizeClass = gapSize && `is-gap-${gapSize}`

  return (
    <Base
      as={as || 'div'}
      className={classNames('pl-column-group', gapSizeClass, className)}
      {...props}
    />
  )
}
