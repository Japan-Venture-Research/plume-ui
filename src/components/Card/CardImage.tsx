import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'div'
type Available = typeof defaultTag | 'a'

export type CardImageProps<T extends Available = typeof defaultTag> = {
  src: string
} & BaseProps<T>

export const CardImage = <T extends Available>({
  className,
  ...props
}: CardImageProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-card-image', className)}
      {...props}
    >
      {/* TODO: replace with Image component */}
      <figure className="image">
        <img src={props.src} />
      </figure>
    </Base>
  )
}

CardImage.displayName = 'CardImage'
