import React from 'react'

type Props {
  // children: any
  data: any
}

export default function SliderBoxContents({data}: Props) {
  if (data) {
    return (
      <div>
        <div>{data.title}</div>
        <div>{data.content}</div>
        <div>{data.date}</div>
      </div>
    )
  } else {
    return (
      <div>
        <div>신규 게시물이 없습니다</div>
      </div>
    )
  }
}
