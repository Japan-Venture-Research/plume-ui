import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import { CardImage } from './CardImage'
import { CardContent } from './CardContent'

type Props = {} & BaseProps<'div' | 'span' | 'a'>

export const Card = Object.assign(
  ({ className, ...props }: Props) => {
    return (
      <Base
        as={props.as || 'div'}
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
