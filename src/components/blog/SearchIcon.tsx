import React from 'react'
import styled from 'styled-components'

interface Props {
  data: any
}

export default function SearchIcon({data}: Props) {
  if (data) {
    return (
      <IconStyle>
        <h3>{data.id}</h3>
        <p>{data.title}</p>
      </IconStyle>
    )
  } else return <div>SearchIcon</div>
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
