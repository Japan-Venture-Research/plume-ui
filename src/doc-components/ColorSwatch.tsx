import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
  name: string
  code: string
}

export const ColorSwatch: React.FC<Props> = props => {
  return (
    <Wrapper code={props.code}>
      <Color code={props.code} />
      <Desc>
        <span>{props.name}</span>
        <span>{props.code}</span>
      </Desc>
    </Wrapper>
  )
}

const Wrapper = styled.span<{ code: string }>`
  display: inline-block;
  width: ${props => (props.code.startsWith('linear') ? '380px' : '190px')};
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: ${props =>
    props.code.startsWith('linear') ? '1rem 1rem' : '1rem 0.5rem'};
`

const Color = styled.span<{ code: string }>`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: inline-block;
  background: ${props => props.code};
  width: 100%;
  height: 130px;
`

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 15px;

  > span:first-of-type {
    color: #333;
    font-weight: bold;
  }

  > span:last-of-type {
    color: #ccc;
    padding-left: 15px;
  }
`
