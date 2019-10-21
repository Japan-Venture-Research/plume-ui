import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'span'
type Available = typeof defaultTag | 'div' | 'a'

export type TooltipProps<T extends Available = typeof defaultTag> = {
  label: string
} & BaseProps<T>

export const Tooltip = <T extends Available>({
  className,
  ...props
}: TooltipProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      aria-label={props.label}
      className={classNames('pl-tooltip', className)}
      {...props}
    />
  )
}

Tooltip.displayName = 'Tooltip'
