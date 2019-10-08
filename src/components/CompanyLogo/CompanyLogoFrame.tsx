import * as React from 'react'
import { Base, BaseProps } from '../../internal/Base'
import classNames from 'classnames'

const defaultTag = 'div'
type Available = typeof defaultTag | 'span'

export type CompanyLogoFrameProps<T extends Available = typeof defaultTag> = {
  size?: 'medium' | 'large'
  children: JSX.Element
} & BaseProps<T>

export const CompanyLogoFrame = <T extends Available>({
  size,
  ...props
}: CompanyLogoFrameProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames(
        `pl-company-logo-frame`,
        {
          'is-medium': size === 'medium',
          'is-large': size === 'large',
        },
        props.className
      )}
      {...props}
    />
  )
}
