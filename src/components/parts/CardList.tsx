import React from 'react'
import styled from 'styled-components'

const cardList = ({children}: {children: React.ReactNode}) => (
  <CardListLayout>{children}</CardListLayout>
)

export default cardList

const CardListLayout = styled.div`
  gap: 1rem;
  display: grid;
  overflow: visible;
  grid-template-columns: repeat(3, 1fr);
`
