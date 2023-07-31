'use client'
import styled from 'styled-components'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as solidIcon from '@fortawesome/free-solid-svg-icons'

type Props = {
  link: string
}
const SiteInfo = ({link}: Props) => {
  return (
    <SiteStyle>
      <div className="title">사이트 종류</div>
      <Link href={link}>
        <span>이동하기</span>
        <FontAwesomeIcon icon={solidIcon.faUpRightFromSquare} />
      </Link>
    </SiteStyle>
  )
}

export default SiteInfo

const SiteStyle = styled.div`
  display: flex;
  .title {
    width: 100px;
    margin-right: 20px;
    display: flex;
  }
  a {
    color: #4aa8d8;
    span {
      margin-right: 7px;
    }
  }
`
