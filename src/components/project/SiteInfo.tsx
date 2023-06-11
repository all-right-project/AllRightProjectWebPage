'use client'
import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  link: string
}
const SiteInfo = ({link}: Props) => {
  return (
    <SiteStyle>
      <div className="title">사이트 종류</div>
      <Link href={link}>이동하기</Link>
    </SiteStyle>
  )
}

export default SiteInfo

const SiteStyle = styled.div`
  display: flex;
  .title {
    width: 100px;
    margin-right: 20px;
  }
  a {
    color: #4aa8d8;
  }
`
