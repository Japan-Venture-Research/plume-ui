import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { TagGroup } from './TagGroup'

type TagColor = 'light' | 'transparent'

type Props = {
  children: string
  color?: TagColor
  prefix?: string
} & BaseProps<'span' | 'a'>

export const Tag = Object.assign(
  ({ color = 'light', className, ...props }: Props) => {
    const colorName = `is-${color}`

    const text = props.prefix
      ? `${props.prefix} ${props.children}`
      : props.children

    return (
      <Base
        as={props.as || 'span'}
        className={classNames(
          'pl-tag',
          colorName,
          {
            'has-prefix': props.prefix,
          },
          className
        )}
        {...props}
      >
        {text}
      </Base>
    )
  },
  { Group: TagGroup }
)
