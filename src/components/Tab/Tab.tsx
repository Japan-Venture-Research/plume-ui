import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { TabGroup } from './TabGroup'

const defaultTag = 'a'
type Available = typeof defaultTag | 'div' | 'span'

export type TabProps<T extends Available = typeof defaultTag> = {
  children: string
  active?: boolean
} & BaseProps<T>

export { TabGroupProps } from './TabGroup'

export const Tab = Object.assign(
  <T extends Available>({
    className,
    active = false,
    ...props
  }: TabProps<T>) => {
    return (
      <Base
        as={props.as || defaultTag}
        className={classNames(
          'pl-tab',
          {
            'is-active': active,
          },
          className
        )}
        {...props}
      />
    )
  },
  { Group: TabGroup }
)
