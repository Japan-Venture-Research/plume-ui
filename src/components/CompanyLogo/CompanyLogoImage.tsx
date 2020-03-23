import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

export type CompanyLogoImageProps = {
  name: string
} & BaseProps<'img'>

export const CompanyLogoImage: React.FC<CompanyLogoImageProps> = (props) => {
  return (
    <Base
      as="img"
      src={props.src}
      alt={props.name}
      className={classNames('pl-company-logo-image', props.className)}
    />
  )
}
