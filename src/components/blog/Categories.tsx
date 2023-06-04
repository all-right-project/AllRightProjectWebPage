import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SearchBar from '@/assets/search-icon.png'
import SearchIcon from '@/components/blog/SearchIcon'

type Props = {}

export default function Categories({}: Props) {
  return (
    <CategoryContainer>
      <div className="category">
        <ul>
          <li className="active">모두보기</li>
          <li>인기</li>
          <li>프론트엔드</li>
          <li>백엔드</li>
          <li>기타</li>
        </ul>
        <SearchBox>
          <Image src={SearchBar} width={20} height={20} alt="검색바" />
          <input type="text" placeholder="카테고리 / 게시물 검색" />
        </SearchBox>
      </div>
      <SearchResult>
        {SearchItem.map((item, index) => (
          <SearchIcon key={item.id} data={SearchItem[index]} />
        ))}
      </SearchResult>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      li {
        margin: 0 10px;
        border: 1px solid #8e2828;
        padding: 5px 20px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        cursor: pointer;
      }
      li.active {
        background-color: #ccc;
        font-weight: 700;
      }
    }
  }
`

const SearchBox = styled.div`
  display: flex;
  border-bottom: 1px solid #8e2828;
  width: 300px;
  padding: 5px;
  input {
    border: none;
    width: 100%;
    outline: none;
  }
`

const SearchResult = styled.div`
  margin-top: 20px;
  background-color: #eee;
  display: inline-flex;
`

const SearchItem = [
  {
    id: 1,
    category: 'frontend',
    image: 'react',
    title: 'React',
  },
  {
    id: 2,
    category: 'frontend',
    image: 'vue',
    title: 'Vue',
  },
  {
    id: 3,
    category: 'frontend',
    image: 'angular',
    title: 'Angular',
  },
]
