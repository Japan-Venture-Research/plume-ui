import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'

const defaultTag = 'span'
type Available = typeof defaultTag | 'div' | 'a'

export type TooltipProps<T extends Available = typeof defaultTag> = {
  label: string
  place?: 'top, bottom, left, right'
  long: boolean
} & BaseProps<T>

export const Tooltip = <T extends Available>({
  className,
  ...props
}: TooltipProps<T>) => {
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-tooltip', className)}
    >
      <span className={classNames('box', (props.long ? 'long' : '' ), props.place || 'top')}>{props.label}</span>
      <span
        {...props}
      />
    </Base>
  )
}

Tooltip.displayName = 'Tooltip'
