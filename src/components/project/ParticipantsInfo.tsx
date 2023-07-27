'use client'
import styled from 'styled-components'
import Image from 'next/image'
import * as Icon from '@/assets/icon'
type Props = {}
const ParticipantsInfo = ({}: Props) => {
  return (
    <ParicipantsStyle>
      <div className="profile">
        <Image src={Icon.siyun} className="img" alt="profile icon" />
        <dl>
          <dt>시또제</dt>
          <dd>FE Developer</dd>
        </dl>
      </div>
      <div className="role">
        <div className="title">프로젝트 담당 업무</div>
        <ul>
          <li>기획</li>
          <li>개발</li>
          <li>디자인</li>
        </ul>
      </div>
    </ParicipantsStyle>
  )
}

export default ParticipantsInfo

const ParicipantsStyle = styled.div`
  border: 1px solid #999;
  border-radius: 10px;
  padding: 15px 10px;
  width: 255px;
  margin-right: 5px;
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
    dl {
      margin-left: 20px;
      dt {
        font-weight: 600;
        margin-bottom: 5px;
      }
      dd {
        font-size: 14px;
        color: #999;
      }
    }
  }
  .role {
    .title {
      font-size: 14px;
      color: #999;
      margin-bottom: 5px;
    }
    ul {
      display: flex;
      gap: 5px;
      li {
        font-size: 14px;
        text-align: center;
        border: 1px solid #999;
        border-radius: 3px;
        width: 80px;
        padding: 2px 0;
      }
    }
  }
`
