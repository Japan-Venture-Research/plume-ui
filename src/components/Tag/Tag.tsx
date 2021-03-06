import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { TagGroup } from './TagGroup'

export { TagGroupProps } from './TagGroup'

type TagColor = 'light' | 'transparent' | 'red'

const defaultTag = 'span'
type Available = typeof defaultTag | 'a'

export type TagProps<T extends Available = typeof defaultTag> = {
  children: string
  color?: TagColor
  square?: boolean
  inverted?: boolean
  prefix?: string
} & BaseProps<T>

export const Tag = Object.assign(
  <T extends Available>({
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
            'is-square': props.square,
          },
          {
            'is-inverted': props.inverted,
          },
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
