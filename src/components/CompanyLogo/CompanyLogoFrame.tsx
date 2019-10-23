import * as React from 'react'
import { Base, BaseProps } from '../../internal/Base'
import classNames from 'classnames'
import { CompanyLogoSize } from './CompanyLogo'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span'

export type CompanyLogoFrameProps<T extends Available = typeof defaultTag> = {
  size?: CompanyLogoSize
  children: JSX.Element
} & BaseProps<T>

export const CompanyLogoFrame = <T extends Available>({
  className,
  ...props
}: CompanyLogoFrameProps<T>) => {
  const size = `is-${props.size || 'normal'}`

  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(`pl-company-logo-frame`, size, className)}
      {...props}
    />
  )
}
