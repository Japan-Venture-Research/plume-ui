import styled from '@emotion/styled'

type Props = {
  colored?: boolean
}

export const InlineBox = styled.span<Props>`
  background-color: ${props => (props.colored ? '#333' : 'transparent')};
  padding: 1rem;
  margin: 1rem;
`
