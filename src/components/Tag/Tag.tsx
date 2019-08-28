import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { TagGroup } from './TagGroup'

type TagColor = 'light' | 'transparent'

const defaultTag = 'span'
type Available = typeof defaultTag | 'a'

type TagProps<T extends Available> = {
  children: string
  color?: TagColor
  prefix?: string
} & BaseProps<T>

export const Tag = Object.assign(
  <T extends Available = typeof defaultTag>({
    color = 'light',
    className,
    ...props
  }: TagProps<T>) => {
    const colorName = `is-${color}`

    const text = props.prefix
      ? `${props.prefix} ${props.children}`
      : props.children

    return (
      <Base
        as={props.as || defaultTag}
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
