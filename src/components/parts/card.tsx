import React from 'react'
import styled from 'styled-components'

type CardProps = {
  children: React.ReactNode
}

const Card = ({children}: CardProps) => {
  return <CardStyle>{children}</CardStyle>
}

export default Card

const CardStyle = styled.div`
  background-color: #fff;
  height: 420px;
  width: 100%;
  max-width: 463px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`
