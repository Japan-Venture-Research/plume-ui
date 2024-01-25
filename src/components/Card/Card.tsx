import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { CardImage } from './CardImage'
import { CardContent } from './CardContent'

export { CardContentProps } from './CardContent'
export { CardImageProps } from './CardImage'

const defaultTag = 'div'
type Available = 'div' | 'span' | 'a'

export type CardProps<T extends Available = typeof defaultTag> =
  {} & BaseProps<T>

export const Card = Object.assign(
  <T extends Available>({ className, ...props }: CardProps<T>) => {
    return (
      <Base
        as={props.as || defaultTag}
        className={classNames('pl-card', className)}
        {...props}
      />
    )
  },
  {
    Image: CardImage,
    Content: CardContent,
  }
)
