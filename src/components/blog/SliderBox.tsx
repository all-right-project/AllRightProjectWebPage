import React from 'react'
import SliderBoxContents from '@/components/blog/SliderBoxContents'
import styled from 'styled-components'

type Props = {}

export default function SliderBox({}: Props) {
  return (
    <SliderBoxContainer>
      {contents.map((item, index) => (
        <SliderBoxContents key={item.id} data={contents[index]} />
      ))}
    </SliderBoxContainer>
  )
}

const SliderBoxContainer = styled.div`
  height: 300px;
  background-color: #eee;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  display: flex;
`

const contents = [
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
  {
    id: 3,
    title: '제목3',
    content: '내용3',
    date: '날짜3',
  },
]
