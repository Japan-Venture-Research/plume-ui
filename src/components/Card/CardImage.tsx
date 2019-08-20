import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

type Props = {
  src: string
} & BaseProps<'div' | 'a'>

export const CardImage: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Base
      as={props.as || 'div'}
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
