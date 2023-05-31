import styled from 'styled-components'
import Image from 'next/image'
import {HomeTitle} from '@/components/parts'
import ProjectImg from '@/assets/project-img.png'

const Project = () => (
  <ProjectStyle>
    <HomeTitle title="project" />
    <div className="img-wrapper">
      <Image
        src={ProjectImg}
        width={700}
        height={450}
        className="img"
        alt="profile icon"
      />
      <Image
        src={ProjectImg}
        width={700}
        height={450}
        className="img"
        alt="profile icon"
      />
    </div>
    <button>&gt;</button>
  </ProjectStyle>
)

export default Project

const ProjectStyle = styled.div`
  .img-wrapper {
    margin-top: 110px;
    position: relative;
    left: 33%;
    .img {
      margin-right: 100px;
    }
  }
  button {
    width: 80px;
    height: 80px;
    background-color: #fff;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 30px;
    position: relative;
    top: -260px;
    left: calc(33% + 660px);
  }
`
