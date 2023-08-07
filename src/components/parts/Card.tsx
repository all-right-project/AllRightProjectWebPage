import React from 'react'
import styled from 'styled-components'

const Card = ({children}: {children: React.ReactNode}) => (
  <CardStyle>{children}</CardStyle>
)

export default Card

const CardStyle = styled.div`
  background-color: #fff;
  height: 390px;
  width: 100%;
  max-width: 394px;
  border-radius: 10px;
  margin: 0 15px 20px 0;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.2);
`
