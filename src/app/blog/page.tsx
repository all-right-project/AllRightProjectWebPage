'use client'

import React from 'react'
import styled from 'styled-components'

type Props = {}

const page = (props: Props) => {
  return (
    <BlogContainer>
      <h1>기술 블로그</h1>
      <div>
        <div>
          <h2>최근 게시물</h2>
          <div>슬라이더 박스</div>
        </div>
        <div>
          <div>
            <ul>
              <li>모두보기</li>
              <li>인기</li>
              <li>프론트엔드</li>
              <li>백엔드</li>
              <li>기타</li>
            </ul>
            <div>
              검색
              <input type="text" placeholder="카테고리 / 게시물 검색" />
            </div>
          </div>
          <div>검색 결과</div>
        </div>
        <div>
          <h2>게시물</h2>
          <div>게시물 리스트</div>
        </div>
      </div>
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
