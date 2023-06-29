import styled from 'styled-components'

type Props = {
  data: DataType
  fake: Boolean
}

type DataType = {
  id: Number
  icon: String
  background_color: String
  title: String
  author: String
  updated: String
}

type StyleProps = {
  backgroundColor: String
  fake: Boolean
}

const Card = ({data, fake}: Props) => (
  <CardStyle backgroundColor={data.background_color} fake={fake}>
    <div className="icon">{data.icon}</div>

    <div>
      <div className="title">{data.title}</div>
      <div className="author-wrapper">
        <div>{data.author}</div>
        <div className="updated">{data.updated}</div>
      </div>
    </div>
  </CardStyle>
)

export default Card

const CardStyle = styled.div<StyleProps>`
  display: flex;
  width: 550px;
  height: 190px;
  border: 3px solid #d9d9d9;
  border-radius: 30px;
  background-color: ${({fake}) => fake && '#D9D9D9'};
  opacity: ${({fake}) => fake && 0.5};
  font-weight: 600;
  .icon {
    width: 130px;
    height: 130px;
    font-size: 70px;
    background-color: ${({backgroundColor}) => `${backgroundColor}`};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 30px 30px 40px;
  }
  .title {
    font-size: 28px;
    margin-top: 50px;
  }
  .author-wrapper {
    display: flex;
    font-size: 20px;
    margin-top: 30px;
    .updated {
      color: #8f8f8f;
      margin-left: 20px;
    }
  }
`
