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
  return (
    <ContentContainerStyle>
      <div className="ly-banner">
        <BannerStyle className="ly-Responsive">
          <h2>프로젝트 제목</h2>
          <BannerContentStyle>
            <p>프로젝트 내용</p>
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
        </ProjectInfo>

        <ProjectInfo title="WHAT DID YOU LEARN?">
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
    width: 1280px;
    margin: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
  a {
    text-decoration: none;
  }
  dl {
    padding: 0;
    margin: 0;
    dd {
      padding: 0;
      margin: 0;
    }
  }
`

const BannerStyle = styled.div`
  display: flex;
  flex-direction: column;
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
const BannerContentStyle = styled.div`
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
