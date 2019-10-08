import * as React from 'react'
import { CompanyLogoFrame } from './CompanyLogoFrame'
import { CompanyLogoImage } from './CompanyLogoImage'

export { CompanyLogoFrame, CompanyLogoFrameProps } from './CompanyLogoFrame'
export { CompanyLogoImage, CompanyLogoImageProps } from './CompanyLogoImage'

type Props = {
  size?: 'medium' | 'large'
  name: string
  src: string
  className?: string
}

export const CompanyLogo = Object.assign(
  (props: Props) => {
    return (
      <CompanyLogoFrame size={props.size} className={props.className}>
        <CompanyLogoImage name={props.name} src={props.src} />
      </CompanyLogoFrame>
    )
  },
  {
    Image: CompanyLogoImage,
    Frame: CompanyLogoFrame,
  }
)
