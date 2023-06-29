import styled from 'styled-components'
type Props = {
  title: String
  position?: Number
}

const CENTER = 42
const HomeTitle = ({title, position = CENTER}: Props) => {
  const uppercaseTitle: String = title.toUpperCase()

  return (
    <HomeTitleStyle position={position}>
      <div className="title">
        <div>our</div>
        <div>{uppercaseTitle}</div>
      </div>
    </HomeTitleStyle>
  )
}

export default HomeTitle

const HomeTitleStyle = styled.div<{position: Number}>`
  position: relative;
  left: ${({position}) => `${position}%`};
  font-family: var(--font-poppins);

  .title {
    line-height: 50px;
    div {
      &:first-child {
        font-size: 30px;
        font-weight: 600;
        font-style: italic;
      }
      &:last-child {
        font-size: 70px;
        font-weight: 800;
        letter-spacing: 4px;
      }
    }
  }
`
