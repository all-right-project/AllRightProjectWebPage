'use client'
import styled from 'styled-components'
import {
  Carousel,
  SiteInfo,
  StackInfo,
  ParticipantsInfo,
  LearnComment,
} from '@/components/project'

type Props = {
  params: {id: string}
}

const ProjectContent = ({params}: Props) => {
  // 프로젝트 글자 수 제한 필요
  return (
    <StyleContentContainer>
      <div className="ly-banner">
        <StyleBanner className="ly-Responsive">
          <h2>프로젝트 제목</h2>
          <StyleBannerContent>
            <p>
              문서 디자인에 의미가 있는 글을 담으면 사람들은 양식을 보지 않고
              글의 내용에 집중하는 경향이 있다. 예를 들어 "나무위키의 서버는
              파라과이에 있다."라는 문장을 적으면 대부분의 사람들은 글씨체에
              집중하지 않고 글의 내용에 집 문서 디자인에 의미가 있는 글을 담으면
              사람들은 양식을 보지 않고 글의 내용에 집중하는 경향이 있다.
              <br />
              <br /> 예를 들 문서 디자인에 의미가 있는 글을 담으면 사람들은
              양식을 보지 않고 글의 내용에 집중하는 경 향이 있다.
              <br />
              <br /> 예를 들어 "나무위키의 서버는 파라과이에 있다."라는 문장을
              적으면 대부분의 사 람들은 글씨체에 집중하지 않고 글의 내용에
              집버는 파라과이에 있다."라는 문장을 적으면 대부분의 사람들은
              글씨체에 집중하지 않고 <br />
              <br />
              글의 내용에 집 문서 디자인에 의미가 있는 글을 담으면 사람들은
              양식을 보지 않고 글의 내용에 집중하는 경향이 있다. <br />
              <br />
              예를 들어 "나무위키의 서버는 의미가 있는 글을 담으면 사
            </p>
            <Carousel />
          </StyleBannerContent>
          <span>2020-02-20에 완성하였어요!</span>
        </StyleBanner>
      </div>
      <div className="ly-Responsive">
        <StyleProjectInfo>
          <h3>SITE</h3>
          <div>
            <SiteInfo link="#"></SiteInfo>
          </div>
        </StyleProjectInfo>

        <StyleProjectInfo>
          <h3>STACK</h3>
          <div>
            <StackInfo
              plan={['Figma', 'Notion']}
              design={['Figma']}
              develope={['Nextjs', 'Styled-components']}
            ></StackInfo>
          </div>
        </StyleProjectInfo>

        <StyleProjectInfo>
          <h3>PARTICIPANTS</h3>
          <div className="d-flex">
            <ParticipantsInfo></ParticipantsInfo>
            <ParticipantsInfo></ParticipantsInfo>
          </div>
        </StyleProjectInfo>

        <StyleProjectInfo>
          <h3>WHAT DID YOU LEARN?</h3>
          <div>
            <LearnComment></LearnComment>
            <LearnComment></LearnComment>
          </div>
        </StyleProjectInfo>
      </div>
    </StyleContentContainer>
  )
}

export default ProjectContent

const StyleContentContainer = styled.div`
  .ly-banner {
    background-color: #f2f3f7;
    width: 100%;
    height: 600px;
  }
  .ly-Responsive {
    max-width: 1280px;
    margin: auto;
  }
  @media (max-width: 1280px) {
    .ly-banner {
      height: auto;
    }
  }
`

const StyleBanner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 47px 0;
  box-sizing: border-box;
  h2 {
    margin-bottom: 20px;
  }
  span {
    font-size: 12px;
    color: #fff;
    background-color: #333;
    padding: 8px 20px;
    border-radius: 5px;
    width: fit-content;
  }
  @media (max-width: 1280px) {
    h2 {
      margin-bottom: 30px;
      text-align: center;
    }
    span {
      margin: 0 10px;
    }
  }
`
const StyleBannerContent = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
  p {
    margin: 0;
    flex-basis: 50%;
    overflow: hidden;
    padding-right: 40px;
    box-sizing: border-box;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    p {
      flex-basis: 40%;
      order: 1;
      margin: 20px 0;
      padding: 0 10px;
    }
  }
`

const StyleProjectInfo = styled.div`
  padding: 0 10px;
  margin-bottom: 50px;
  h3 {
    margin: 35px 0 20px;
  }
  & > div {
    display: block;
  }
  .d-flex {
    display: flex;
    flex-wrap: wrap;
  }
`
