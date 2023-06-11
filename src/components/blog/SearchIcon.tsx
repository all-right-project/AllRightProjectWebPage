import React from 'react'
import styled from 'styled-components'

type Props = {
  data: any
  currentId: string
}

export default function SearchIcon({data, currentId}: Props) {
  if (data && data.category === currentId) {
    return (
      <IconStyle>
        <h3>{data.id}</h3>
        <p>{data.title}</p>
      </IconStyle>
    )
  } else
    return (
      <div>
        {currentId}
        <br /> 카테고리여유
      </div>
    )
}

const IconStyle = styled.div`
  padding: 2px 10px;
  display: flex;
  align-items: center;
  margin: 10px;
  border: 1px solid #ccc;
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
`
