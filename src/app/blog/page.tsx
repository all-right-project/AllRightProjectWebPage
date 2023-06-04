'use client'

import React from 'react'
import styled from 'styled-components'
import SliderBox from '@/components/blog/SliderBox'
import Categories from '@/components/blog/Categories'
import Card from '@/components/parts/Card'
import SearchIcon from '@/components/blog/SearchIcon'

type Props = {}

const page = (props: Props) => {
  return (
    <BlogContainer>
      <h1>기술 블로그</h1>
      <div>
        <div>
          <h2>최근 게시물</h2>
          <SliderBox />
        </div>
        <Categories />
        <div>
          <h2>게시물</h2>
          <Card children={<SearchIcon data=""></SearchIcon>} />
        </div>
      </div>
    </BlogContainer>
  )
}

export default page

const BlogContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;

    background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  }
`

const CardData = [
  {
    id: 1,
    title: '제목1',
    content: '내용1',
    date: '날짜',
  },
  {
    id: 2,
    title: '제목2',
    content: '내용2',
    date: '날짜2',
  },
]
