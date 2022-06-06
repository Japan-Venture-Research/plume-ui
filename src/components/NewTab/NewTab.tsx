import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { NewTabGroup } from './NewTabGroup'
import { formatWithComma } from '../../lib/number'

const defaultTag = 'a'
type Available = typeof defaultTag | 'div' | 'span'

export type NewTabProps<T extends Available = typeof defaultTag> = {
  children: string | JSX.Element
  count?: number
  active?: boolean
  disabled?: boolean
} & BaseProps<T>

export { NewTabGroupProps } from './NewTabGroup'

export const NewTab = Object.assign(
  <T extends Available>({
    className,
    count,
    active = false,
    disabled = false,
    ...props
  }: NewTabProps<T>) => {
    return (
      <Base
        as={props.as || defaultTag}
        className={classNames(
          'pl-new-tab',
          {
            'is-active': active,
          },
          {
            'is-disabled': disabled,
          },
          className
        )}
        {...props}
      >
        {props.children}
        <>
          {count !== undefined && count > 0 && (
            <span className="pl-tab-count">{formatWithComma(count)}</span>
          )}
        </>
      </Base>
    )
  },
  { Group: NewTabGroup }
)
