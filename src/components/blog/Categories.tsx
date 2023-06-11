import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SearchBar from '@/assets/search-icon.png'
import SearchIcon from '@/components/blog/SearchIcon'

type Props = {}

export default function Categories({}: Props) {
  const [currentId, setCurrentId] = React.useState('all')
  const handleCategories = (id: string) => {
    setCurrentId(id)
    console.log('handleCategories', `${id}`)
  }
  return (
    <CategoryContainer>
      <div className="category">
        <ul>
          <li
            id="all"
            style={{
              background: `${currentId === 'all' ? '#ccc' : '#fff'}`,
            }}
            onClick={e => handleCategories(e.target.id)}
          >
            모두보기
          </li>
          <li
            id="hot"
            style={{
              background: `${currentId === 'hot' ? '#ccc' : '#fff'}`,
            }}
            onClick={e => handleCategories(e.target.id)}
          >
            인기
          </li>
          <li
            id="front"
            style={{
              background: `${currentId === 'front' ? '#ccc' : '#fff'}`,
            }}
            onClick={e => handleCategories(e.target.id)}
          >
            프론트엔드
          </li>
          <li
            id="back"
            style={{
              background: `${currentId === 'back' ? '#ccc' : '#fff'}`,
            }}
            onClick={e => handleCategories(e.target.id)}
          >
            백엔드
          </li>
          <li
            id="etc"
            style={{
              background: `${currentId === 'etc' ? '#ccc' : '#fff'}`,
            }}
            onClick={e => handleCategories(e.target.id)}
          >
            기타
          </li>
        </ul>
        <SearchBox>
          <Image src={SearchBar} width={20} height={20} alt="검색바" />
          <input type="text" placeholder="카테고리 / 게시물 검색" />
        </SearchBox>
      </div>
      <SearchResult>
        {SearchItem.map((item, index) => (
          <SearchIcon
            key={item.id}
            data={SearchItem[index]}
            currentId={currentId}
          />
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
    category: 'front',
    image: 'react',
    title: 'React',
  },
  {
    id: 2,
    category: 'front',
    image: 'vue',
    title: 'Vue',
  },
  {
    id: 3,
    category: 'front',
    image: 'angular',
    title: 'Angular',
  },
]
