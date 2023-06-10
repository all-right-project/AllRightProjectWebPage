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
  margin-bottom: 50px;
  & > div {
    display: ${props => props.display || 'block'};
  }
`
