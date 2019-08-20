import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

export type Props = {} & BaseProps<'div' | 'span' | 'ul'>

export const TagGroup: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Base
      as={props.as || 'span'}
      className={classNames('pl-tag-group', className)}
      {...props}
    />
  )
}

TagGroup.displayName = 'Tag.Group'
