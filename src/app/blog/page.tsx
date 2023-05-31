'use client'

import React from 'react'
import styled from 'styled-components'

type Props = {}

const page = (props: Props) => {
  return (
    <BlogContainer>
      <h1>기술 블로그</h1>
    </BlogContainer>
  )
}

export default page

const BlogContainer = styled.div`
  width: 100%;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;

    background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  }
`
