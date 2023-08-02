import * as React from 'react'
import { Base, BaseProps } from '../../internal/Base'
import classNames from 'classnames'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span'
export type CompanyLogoSize =
  | 'extra-small'
  | 'small'
  | 'normal'
  | 'large'
  | 'extra-large'

export type CompanyLogoFrameProps<T extends Available = typeof defaultTag> = {
  size?: CompanyLogoSize
  children: JSX.Element
} & BaseProps<T>

export const CompanyLogoFrame = <T extends Available>({
  className,
  size,
  ...props
}: CompanyLogoFrameProps<T>) => {
  const sizeStr = `is-${size || 'normal'}`

  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(`pl-company-logo-frame`, sizeStr, className)}
      {...props}
    />
  )
}
