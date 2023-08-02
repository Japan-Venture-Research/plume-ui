import * as React from 'react'
import { CompanyLogoFrame, CompanyLogoSize } from './CompanyLogoFrame'
import { CompanyLogoImage } from './CompanyLogoImage'

export { CompanyLogoFrame, CompanyLogoFrameProps } from './CompanyLogoFrame'
export { CompanyLogoImage, CompanyLogoImageProps } from './CompanyLogoImage'

type Props = {
  size?: CompanyLogoSize
  name: string
  src: string
  className?: string
}

export const CompanyLogo = Object.assign(
  ({ className, ...props }: Props) => {
    return (
      <CompanyLogoFrame size={props.size} className={className}>
        <CompanyLogoImage name={props.name} src={props.src} />
      </CompanyLogoFrame>
    )
  },
  {
    Image: CompanyLogoImage,
    Frame: CompanyLogoFrame,
  }
)
