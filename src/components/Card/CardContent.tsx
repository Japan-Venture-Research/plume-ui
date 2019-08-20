import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

type Props = {} & BaseProps<'div' | 'a'>

export const CardContent: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Base
      as={props.as || 'div'}
      className={classNames('pl-card-content', className)}
      {...props}
    />
  )
}
