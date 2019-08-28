import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'span'
type Available = typeof defaultTag | 'div' | 'ul'

export type TagGroupProps<
  T extends Available = typeof defaultTag
> = {} & BaseProps<T>

export const TagGroup = <T extends Available>({
  className,
  ...props
}: TagGroupProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-tag-group', className)}
      {...props}
    />
  )
}

TagGroup.displayName = 'Tag.Group'
