'use client'
import styled from 'styled-components'
type Props = {
  title: string
  displayType?: string
  children: React.ReactNode
}
const ProjectInfo = ({title, displayType, children}: Props) => {
  return (
    <ProjectInfoStyle display={displayType}>
      <h3>{title}</h3>
      <div>{children}</div>
    </ProjectInfoStyle>
  )
}

export default ProjectInfo

const ProjectInfoStyle = styled.div<{display?: string}>`
  padding: 0 10px;
  margin-bottom: 50px;
  h3 {
    margin: 35px 0 20px;
  }
  & > div {
    display: ${props => props.display || 'block'};
  }
`
