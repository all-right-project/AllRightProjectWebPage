'use client'
import styled from 'styled-components'
import Image from 'next/image'
import * as Icon from '@/assets/icon'
type Props = {}
const LearnComment = ({}: Props) => {
  return (
    <LearnStyle>
      <Image src={Icon.siyun} className="img" alt="profile icon" />
      <div>
        <div className="arrow"></div>
        <p>
          테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트ㅍ
        </p>
      </div>
    </LearnStyle>
  )
}

export default LearnComment

const LearnStyle = styled.div`
  display: flex;
  margin-bottom: 15px;
  .img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    flex: none;
  }
  & > div {
    border: 1px solid #999;
    position: relative;
    margin-left: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    min-width: 200px;
    .arrow {
      position: absolute;
      left: -6px;
      top: 10px;
      border-top: 1px solid #999;
      border-left: 1px solid #999;
      transform: rotate(-45deg);
      background-color: #fff;
      width: 10px;
      height: 10px;
    }
  }
`
