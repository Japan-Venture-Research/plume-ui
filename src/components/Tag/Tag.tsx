import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

type TagColor = 'light' | 'transparent'

type Props = {
  children: string
  color?: TagColor
  prefix?: string
} & BaseProps<'span' | 'a'>

export const Tag: React.FC<Props> = ({
  color = 'light',
  className,
  ...props
}) => {
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
}
