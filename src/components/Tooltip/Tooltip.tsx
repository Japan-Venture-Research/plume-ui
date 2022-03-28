import * as React from 'react'
import classNames from 'classnames'
import { Base, BaseProps } from '../../internal/Base'
import ReactTooltip from 'react-tooltip'
import { useEffect } from 'react'

const defaultTag = 'span'
type Available = typeof defaultTag | 'div' | 'a'

export type TooltipProps<T extends Available = typeof defaultTag> = {
  label: string
  place?: 'top, bottom, left, right'
  id?: string
} & BaseProps<T>

export const Tooltip = <T extends Available>({
  className,
  ...props
}: TooltipProps<T>) => {
  useEffect(() => {
    ReactTooltip.rebuild()
  })
  return (
    <Base
      as={props.as || defaultTag}
      className={classNames('pl-tooltip', className)}
      id={props.id}
    >
      <span
        data-for="pl-tooltip"
        data-tip={props.label}
        data-place={props.place || 'top'}
        data-effect="solid"
        data-offset="{'top': 0, 'bottom':0, 'left': 0, 'right':0}"
        data-arrow-color="transparent"
        data-delay-hide="100"
        data-delay-show="100"
        {...props}
      />
    </Base>
  )
}

export const TooltipWrapper = () => {
  return (
    <>
      <ReactTooltip id="pl-tooltip" />
    </>
  )
}

Tooltip.displayName = 'Tooltip'
