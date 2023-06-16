import styled from 'styled-components'
import {HomeTitle} from '@/components/parts'
import Card from './Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as solidIcon from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'

type DataType = {
  id: Number
  icon: String
  background_color: String
  title: String
  author: String
  updated: String
}

const Blog = () => {
  const data = [
    {
      id: 1,
      icon: '🏋️',
      background_color: '#F3DF49',
      title: '블로그 제목제목',
      author: '글쓴이',
      updated: '2일전',
    },
    {
      id: 2,
      icon: '🍑',
      background_color: '#FFD1E2',
      title: '블로그 제목제목',
      author: '글쓴이',
      updated: '2일전',
    },
    {
      id: 3,
      icon: '🔫',
      background_color: '#B9FF61',
      title: '블로그 제목제목',
      author: '글쓴이',
      updated: '2일전',
    },
    {
      id: 4,
      icon: '🫠',
      background_color: '#FFE7AB',
      title: '블로그 제목제목',
      author: '글쓴이',
      updated: '2일전',
    },
    {
      id: 5,
      icon: '🔨',
      background_color: '#4AA8D8',
      title: '블로그 제목제목',
      author: '글쓴이',
      updated: '2일전',
    },
  ]
  const [blogData, setBlogData] = useState<DataType[]>([])

  useEffect(() => {
    if (data.length <= 6) {
      const fakeDataCount = 6 - data.length
      for (let i = 1; i <= fakeDataCount; i++) {
        setBlogData([
          ...data,
          {
            id: data.length + i,
            icon: '🔥',
            background_color: '#FA6C6C',
            title: '블로그 제목제목',
            author: '글쓴이',
            updated: '2일전',
          },
        ])
      }
    }
  }, [])

  const isFake = (id: Number) => (id > data.length ? true : false)
  return (
    <BlogStyle>
      <HomeTitle title="Blog" position={0} />
      <div className="card-wrapper">
        {blogData.map(data => (
          <Card key={data.id} data={data} fake={isFake(data.id)} />
        ))}
      </div>

      <button>
        <span>READ MORE</span>
        <FontAwesomeIcon icon={solidIcon.faArrowRight} />
      </button>
    </BlogStyle>
  )
}

export default Blog

const BlogStyle = styled.div`
  width: 1150px;
  margin: 200px auto;
  .card-wrapper {
    width: 1150px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 120px 0 40px 0;
    gap: 40px;
  }
  button {
    position: relative;
    left: 970px;
    background-color: transparent;
    border: none;
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
    span {
      margin-right: 6px;
      padding: 0 4px 2px 0px;
      border-bottom: 3px solid #000;
    }
  }
`
