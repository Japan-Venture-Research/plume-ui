import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span' | 'ul'

export type NewTabGroupProps<
  T extends Available = typeof defaultTag
> = {} & BaseProps<T>

export const NewTabGroup = <T extends Available>({
  className,
  ...props
}: NewTabGroupProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-tab-group', className)}
      {...props}
    />
  )
}

NewTabGroup.displayName = 'NewTab.Group'
