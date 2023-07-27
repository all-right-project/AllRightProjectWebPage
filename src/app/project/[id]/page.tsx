'use client'
import styled from 'styled-components'
import {
  Carousel,
  ProjectInfo,
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
    <ContentContainerStyle>
      <div className="ly-banner">
        <BannerStyle className="ly-Responsive">
          <h2>프로젝트 제목</h2>
          <BannerContentStyle>
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
          </BannerContentStyle>
          <span>2020-02-20에 완성하였어요!</span>
        </BannerStyle>
      </div>
      <div className="ly-Responsive">
        <ProjectInfo title="SITE">
          <SiteInfo link="#"></SiteInfo>
        </ProjectInfo>

        <ProjectInfo title="STACK">
          <StackInfo
            plan={['Figma', 'Notion']}
            design={['Figma']}
            develope={['Nextjs', 'Styled-components']}
          ></StackInfo>
        </ProjectInfo>

        <ProjectInfo title="PARTICIPANTS" displayType="flex">
          <ParticipantsInfo></ParticipantsInfo>
          <ParticipantsInfo></ParticipantsInfo>
        </ProjectInfo>

        <ProjectInfo title="WHAT DID YOU LEARN?">
          <LearnComment></LearnComment>
          <LearnComment></LearnComment>
        </ProjectInfo>
      </div>
    </ContentContainerStyle>
  )
}

export default ProjectContent

const ContentContainerStyle = styled.div`
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

const BannerStyle = styled.div`
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
const BannerContentStyle = styled.div`
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
