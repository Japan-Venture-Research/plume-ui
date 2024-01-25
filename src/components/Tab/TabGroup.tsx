import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span' | 'ul'

export type TabGroupProps<T extends Available = typeof defaultTag> =
  {} & BaseProps<T>

export const TabGroup = <T extends Available>({
  className,
  ...props
}: TabGroupProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-tab-group', className)}
      {...props}
    />
  )
}

TabGroup.displayName = 'Tab.Group'
