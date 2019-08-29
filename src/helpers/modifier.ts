import { SpacingModifiable } from './spacing'
import classNames from 'classnames'

export type Modifiable = SpacingModifiable & {
  className?: string
}

export const transformModifiers = (props: Modifiable) => {
  const { marginless, paddingless, className, ...rest } = props

  return {
    className: classNames(
      {
        'is-marginless': marginless,
        'is-paddingless': paddingless,
      },
      className
    ),
    ...rest,
  }
}
