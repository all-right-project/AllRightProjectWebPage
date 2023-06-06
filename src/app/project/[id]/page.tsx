'use client'
import styled from 'styled-components'
import {Carousel} from '@/components/project'
type Props = {
  params: {id: string}
}

const ProjectContent = ({params}: Props) => {
  return (
    <ContentContainer>
      <div className="ly-banner">
        <Banner>
          <h2>프로젝트 제목</h2>
          <BannerContent>
            <p>프로젝트 내용</p>
            <Carousel />
          </BannerContent>
          <span>2020-02-20에 완성하였어요!</span>
        </Banner>
      </div>
      <div></div>
    </ContentContainer>
  )
}

export default ProjectContent

const ContentContainer = styled.div`
  .ly-banner {
    background-color: #f2f3f7;
    width: 100%;
    height: 600px;
  }
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1280px;
  height: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  span {
    font-size: 12px;
    color: #fff;
    background-color: #333;
    padding: 8px 20px;
    border-radius: 5px;
    width: fit-content;
  }
`
const BannerContent = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
  p {
    flex-basis: 50%;
    overflow: hidden;
    padding-right: 40px;
    box-sizing: border-box;
  }
`
