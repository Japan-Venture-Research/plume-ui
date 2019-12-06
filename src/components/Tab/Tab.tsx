import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { TabGroup } from './TabGroup'
import { formatWithComma } from '../../lib/number'

const defaultTag = 'a'
type Available = typeof defaultTag | 'div' | 'span'

export type TabProps<T extends Available = typeof defaultTag> = {
  children: string | JSX.Element
  count?: number
  active?: boolean
} & BaseProps<T>

export { TabGroupProps } from './TabGroup'

export const Tab = Object.assign(
  <T extends Available>({
    className,
    count,
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
      >
        {props.children}
        <>
          {count && count > 0 && (
            <span className="pl-tab-count">{formatWithComma(count)}</span>
          )}
        </>
      </Base>
    )
  },
  { Group: TabGroup }
)
