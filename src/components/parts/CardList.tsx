import React from 'react'
import styled from 'styled-components'

const cardList = ({children}: {children: React.ReactNode}) => (
  <CardListLayout>{children}</CardListLayout>
)

export default cardList

const CardListLayout = styled.div`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 1310px) {
    justify-content: center;
    flex-grow: 0;
  }
`
