import React from 'react'
import Image from 'next/image'
import tempImg from '@/assets/project-img.png'
import styled from 'styled-components'

const cardContents = () => {
  // 이미지 파일은 16:9 비율 권장. 이상적 사이즈는 400x225
  // 소개글은 52글자 이내 권장
  return (
    <CardContentsContainer>
      <div className="img-container">
        <Image
          src={tempImg}
          className="img"
          alt="project thumbnail"
          priority={false}
        />
      </div>
      <div className="content-container">
        <MainContents>
          <h3>프로젝트 제목</h3>
          <p className="introduce">
            프로젝트설명글프로젝트설명글프로젝트프로젝트설명글프로젝트설명글프로젝트프ddd로젝트설명글프로젝트설명글프로젝트프로젝트설명글프로젝트설명글프로젝트프로젝트설명글프로젝트설명글프로젝트프로젝트설명글프로젝트설명글
          </p>
        </MainContents>
        <FootContents>
          <div className="participants">
            <div className="leader-name">작성자</div>
            <span className="etc">외 n명</span>
          </div>
          <div className="date">2023-02-21에 완성되었어요!</div>
        </FootContents>
      </div>
    </CardContentsContainer>
  )
}

export default cardContents

const CardContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .img-container {
    height: 225px; // 반응형
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content-container {
    height: 100%;
    display: flex;
    padding: 18px;
    flex-direction: column;
    justify-content: space-between;
  }
`
const MainContents = styled.div`
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .introduce {
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }
`
const FootContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .participants {
    display: flex;
    align-items: center;
    .leader-name {
      font-size: 12px;
      background-color: #333;
      color: #fff;
      border-radius: 50px;
      padding: 5px 12px;
    }
    .etc {
      font-size: 12px;
      color: #888;
      margin-left: 5px;
    }
  }
  .date {
    font-size: 12px;
    color: #888;
  }
`
