import styled from '@emotion/styled'
import { mq } from '../helpers/responsive/mq'

const blockStyle = `
  display: block;
  background-color: #333;
  height: 100px;
  width: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const Small = styled.div`
  display: none;

  ${mq.small} {
    ${blockStyle};
  }
`

export const Medium = styled.div`
  display: none;

  ${mq.medium} {
    ${blockStyle};
  }
`

export const MediumOnly = styled.div`
  display: none;

  ${mq.mediumOnly} {
    ${blockStyle};
  }
`

export const Large = styled.div`
  display: none;

  ${mq.large} {
    ${blockStyle};
  }
`

export const LargeOnly = styled.div`
  display: none;

  ${mq.largeOnly} {
    ${blockStyle};
  }
`

export const ExtraLarge = styled.div`
  display: none;

  ${mq.extraLarge} {
    ${blockStyle};
  }
`

export const UntilMedium = styled.div`
  display: none;

  ${mq.untilMedium} {
    ${blockStyle};
  }
`

export const UntilLarge = styled.div`
  display: none;

  ${mq.untilLarge} {
    ${blockStyle};
  }
`
